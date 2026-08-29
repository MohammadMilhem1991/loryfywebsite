import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parser middleware
  app.use(express.json());

  // API: Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // API: Contact Form Submission & Email Delivery
  app.post("/api/contact", async (req, res) => {
    const { name, email, mobile, message } = req.body;

    if (!name || !email || !message) {
      res.status(400).json({ error: "Name, email, and message are required." });
      return;
    }

    if (typeof message !== "string" || message.trim().length < 15) {
      res.status(400).json({ error: "Message must be at least 15 characters long." });
      return;
    }

    const adminEmail = "info@loryfy.com";

    // Microsoft Graph variables from environment
    const tenantId = process.env.MICROSOFT_TENANT_ID?.trim();
    const clientId = process.env.MICROSOFT_CLIENT_ID?.trim();
    const clientSecret = process.env.MICROSOFT_CLIENT_SECRET?.trim();

    const hasMsGraphConfig = tenantId && clientId && clientSecret;

    // Build the admin notification email content
    const adminSubject = `Message from Website`;
    const adminHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #f8fafc;">
        <h2 style="color: #0f58d5; margin-top: 0;">New Inquiry from Loryfy Contact Form</h2>
        <p style="margin-bottom: 20px; color: #475467;">The following details were submitted from the website contact page:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; width: 150px; color: #101828;">Full Name:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #334155;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #101828;">Email:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #334155;"><a href="mailto:${email}" style="color: #0f58d5;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #101828;">Mobile:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #334155; direction: ltr; text-align: left;">${mobile || "Not provided"}</td>
          </tr>
        </table>
        
        <div style="background-color: white; padding: 15px; border-left: 4px solid #0f58d5; border-radius: 4px; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
          <strong style="color: #101828; display: block; margin-bottom: 8px;">Message:</strong>
          <p style="margin: 0; color: #334155; white-space: pre-wrap; line-height: 1.5;">${message}</p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0 15px 0;" />
        <p style="font-size: 11px; color: #64748b; text-align: center;">Sent from Loryfy Server</p>
      </div>
    `;

    // Detect if the message contains Arabic characters
    const hasArabic = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/g.test(message);

    // Build the user acknowledgment email content dynamically
    let acknowledgmentSubject = "";
    let acknowledgmentHtml = "";

    if (hasArabic) {
      acknowledgmentSubject = `تم استلام رسالتك - دعم لوريفاي`;
      acknowledgmentHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff;">
          <!-- Header -->
          <div style="text-align: center; margin-bottom: 25px; border-bottom: 1px solid #f1f5f9; padding-bottom: 20px;">
            <div style="font-size: 24px; font-weight: bold; color: #0F58D5; letter-spacing: -0.5px; font-family: sans-serif;">Loryfy</div>
          </div>

          <!-- Arabic Section -->
          <div style="direction: rtl; text-align: right; line-height: 1.6; color: #334155;">
            <h3 style="color: #101828; margin-top: 0;">مرحباً ${name}،</h3>
            <p>شكرًا لتواصلك مع لوريفاي. لقد استلمنا استفسارك بنجاح وفريقنا يقوم بمراجعته حاليًا.</p>
            <p>سيقوم أحد أعضاء فريقنا بالرد عليك قريبًا على بريدك الإلكتروني <strong>${email}</strong>. حتى ذلك الحين، يمكنك تصفح التطبيق واكتشاف الفرص الاستثمارية التي تهمك.</p>
            <p style="margin-bottom: 0;">مع أطيب التحيات،<br/><strong>فريق دعم لوريفاي</strong></p>
          </div>

          <!-- Footer -->
          <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #f1f5f9; text-align: center; font-size: 11px; color: #64748b;">
            <p style="margin: 0;">© 2026 Loryfy. All rights reserved.</p>
            <p style="margin: 5px 0 0 0;"><a href="https://loryfy.com" style="color: #0f58d5; text-decoration: none;">loryfy.com</a></p>
          </div>
        </div>
      `;
    } else {
      acknowledgmentSubject = `We received your message - Loryfy Support`;
      acknowledgmentHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff;">
          <!-- Header -->
          <div style="text-align: center; margin-bottom: 25px; border-bottom: 1px solid #f1f5f9; padding-bottom: 20px;">
            <div style="font-size: 24px; font-weight: bold; color: #0F58D5; letter-spacing: -0.5px; font-family: sans-serif;">Loryfy</div>
          </div>

          <!-- English Section -->
          <div style="margin-bottom: 25px; line-height: 1.6; color: #334155;">
            <h3 style="color: #101828; margin-top: 0;">Hi ${name},</h3>
            <p>Thank you for reaching out to Loryfy. We have successfully received your inquiry and our team is already reviewing it.</p>
            <p>One of our team members will get back to you shortly at <strong>${email}</strong>. In the meantime, feel free to explore our app and find opportunities that match your interests.</p>
            <p style="margin-bottom: 0;">Best regards,<br/><strong>The Loryfy Support Team</strong></p>
          </div>

          <!-- Footer -->
          <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #f1f5f9; text-align: center; font-size: 11px; color: #64748b;">
            <p style="margin: 0;">© 2026 Loryfy. All rights reserved.</p>
            <p style="margin: 5px 0 0 0;"><a href="https://loryfy.com" style="color: #0f58d5; text-decoration: none;">loryfy.com</a></p>
          </div>
        </div>
      `;
    }

    if (hasMsGraphConfig) {
      try {
        console.log(`[Microsoft OAuth] Attempting to acquire access token for Tenant: ${tenantId}`);
        const tokenUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;
        const params = new URLSearchParams();
        params.append("client_id", clientId!);
        params.append("scope", "https://graph.microsoft.com/.default");
        params.append("client_secret", clientSecret!);
        params.append("grant_type", "client_credentials");

        const tokenResponse = await fetch(tokenUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params.toString(),
        });

        if (!tokenResponse.ok) {
          const errText = await tokenResponse.text();
          throw new Error(`Failed to obtain Microsoft OAuth token: ${errText}`);
        }

        const tokenData = (await tokenResponse.json()) as { access_token: string };
        const accessToken = tokenData.access_token;
        console.log(`[Microsoft OAuth] Access token obtained successfully.`);

        // URL to send mail on behalf of info@loryfy.com
        const sendMailUrl = `https://graph.microsoft.com/v1.0/users/${adminEmail}/sendMail`;

        // 1. Send the main email to the official address info@loryfy.com
        console.log(`[Microsoft Graph] Sending main inquiry email to ${adminEmail}...`);
        const adminMailPayload = {
          message: {
            subject: adminSubject,
            body: {
              contentType: "HTML",
              content: adminHtml,
            },
            toRecipients: [
              {
                emailAddress: {
                  address: adminEmail,
                },
              },
            ],
            replyTo: [
              {
                emailAddress: {
                  address: email,
                },
              },
            ],
          },
          saveToSentItems: "true",
        };

        const adminResponse = await fetch(sendMailUrl, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(adminMailPayload),
        });

        if (!adminResponse.ok) {
          const errText = await adminResponse.text();
          throw new Error(`Failed to send main email to admin via MS Graph: ${errText}`);
        }

        // 2. Send the acknowledgment email to the user
        console.log(`[Microsoft Graph] Sending acknowledgment email to user ${email}...`);
        const userMailPayload = {
          message: {
            subject: acknowledgmentSubject,
            body: {
              contentType: "HTML",
              content: acknowledgmentHtml,
            },
            toRecipients: [
              {
                emailAddress: {
                  address: email,
                },
              },
            ],
          },
          saveToSentItems: "true",
        };

        const userResponse = await fetch(sendMailUrl, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userMailPayload),
        });

        if (!userResponse.ok) {
          const errText = await userResponse.text();
          throw new Error(`Failed to send acknowledgment email via MS Graph: ${errText}`);
        }

        console.log(`[Email Success] Inquiry email and acknowledgment sent successfully for ${email} via MS Graph API`);
        res.status(200).json({ success: true, message: "Emails sent successfully via Microsoft Graph API." });
      } catch (msGraphError: any) {
        console.error("[Microsoft Graph Error] Failed to deliver emails:", msGraphError);
        
        let detailedError = msGraphError.message || msGraphError.toString();
        
        // Match Microsoft Graph Access Denied Errors
        if (detailedError.includes("ErrorAccessDenied") || detailedError.includes("Access is denied")) {
          detailedError = "Microsoft Graph Access Denied (ErrorAccessDenied). Please ensure that in the Azure Portal (portal.azure.com):\n" +
            "1. Go to 'API permissions' and add the 'Mail.Send' permission as an APPLICATION permission (NOT 'Delegated').\n" +
            "2. Make sure you click on 'Grant admin consent for [Your Org]' to authorize sending mails.";
        }

        res.status(500).json({
          error: "Failed to send email. The server encountered an issue with Microsoft Graph delivery.",
          details: detailedError,
        });
      }
    } else {
      // Graceful fallback for local development or when MS Graph variables are not set
      console.log("\n--- [DEVELOPMENT MODE: CONTACT SUBMISSION RECEIVED] ---");
      console.log(`To Admin (${adminEmail}):`);
      console.log(`Subject: ${adminSubject}`);
      console.log(`Details:`, { name, email, mobile, message });
      console.log("\nTo User Acknowledgment:");
      console.log(`To: ${email}`);
      console.log(`Subject: ${acknowledgmentSubject}`);
      console.log("----------------------------------------------------\n");
      console.log("[Microsoft Graph Notice] OAuth variables are not configured. Set MICROSOFT_TENANT_ID, MICROSOFT_CLIENT_ID, and MICROSOFT_CLIENT_SECRET to enable real email delivery via Microsoft Graph API.");

      res.status(200).json({
        success: true,
        simulation: true,
        message: "Message received successfully. (MS Graph OAuth is not configured yet, details logged to server console)",
      });
    }
  });

  // Serve static assets in production, use Vite middleware in development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);

    app.get("*", async (req, res, next) => {
      // Pass through any static assets or API routes
      if (req.path.startsWith("/api/") || req.path.includes(".")) {
        return next();
      }

      try {
        const { resolveRoute } = await import("./src/utils/routes");
        const { injectSeoIntoHtml } = await import("./src/utils/htmlInjector");

        const resolved = resolveRoute(req.path);
        const indexPath = path.join(process.cwd(), "index.html");
        let template = await fs.promises.readFile(indexPath, "utf-8");
        template = await vite.transformIndexHtml(req.originalUrl, template);

        const html = injectSeoIntoHtml(
          template,
          resolved.lang,
          resolved.page,
          resolved.slug
        );

        res.status(resolved.statusCode).set({ "Content-Type": "text/html" }).end(html);
      } catch (e: any) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });

    console.log("[Server] Vite middleware mounted for development with dynamic SEO injection & 404 handling");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath, { index: false }));

    app.get("*", async (req, res) => {
      try {
        const { resolveRoute } = await import("./src/utils/routes");
        const { injectSeoIntoHtml } = await import("./src/utils/htmlInjector");

        const resolved = resolveRoute(req.path);
        const templatePath = path.join(distPath, "index.html");

        if (fs.existsSync(templatePath)) {
          const template = await fs.promises.readFile(templatePath, "utf-8");
          const html = injectSeoIntoHtml(
            template,
            resolved.lang,
            resolved.page,
            resolved.slug
          );
          res.status(resolved.statusCode).set({ "Content-Type": "text/html" }).send(html);
        } else {
          res.status(resolved.statusCode).sendFile(path.join(distPath, "index.html"));
        }
      } catch (err) {
        console.error("[Server Error]", err);
        res.status(500).send("Internal Server Error");
      }
    });
    console.log("[Server] Serving production static bundle from /dist with SEO prerender fallback & 404 handling");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
