import React from "react";
import { handleAppStoreClick } from "../utils/analytics";
import { AppleStoreIcon, GooglePlayIcon } from "./OfficialStoreIcons";
export { QrDownloadModal, QrDownloadButton } from "./QrDownloadModal";

interface StoreButtonProps {
  id?: string;
  className?: string;
  onClick?: () => void;
}

export const AppleStoreButton: React.FC<StoreButtonProps> = ({
  id = "download-apple-store-btn",
  className = "",
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      handleAppStoreClick("ios");
    }
  };

  return (
    <button
      id={id}
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-3 px-5 py-3 rounded-2xl bg-black hover:bg-slate-900 text-white shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer border border-slate-800 group active:scale-98 ${className}`}
    >
      <AppleStoreIcon className="w-7 h-7 text-white fill-current shrink-0 group-hover:scale-105 transition-transform" />
      <div className="text-start">
        <div className="text-[10px] text-slate-300 uppercase tracking-tight leading-none">
          Download on the
        </div>
        <div className="text-base font-bold tracking-tight leading-tight mt-0.5">
          App Store
        </div>
      </div>
    </button>
  );
};

export const GooglePlayButton: React.FC<StoreButtonProps> = ({
  id = "download-google-play-btn",
  className = "",
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      handleAppStoreClick("android");
    }
  };

  return (
    <button
      id={id}
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-3 px-5 py-3 rounded-2xl bg-black hover:bg-slate-900 text-white shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer border border-slate-800 group active:scale-98 ${className}`}
    >
      <GooglePlayIcon className="w-7 h-7 shrink-0 group-hover:scale-105 transition-transform" />
      <div className="text-start">
        <div className="text-[10px] text-slate-300 uppercase tracking-tight leading-none">
          GET IT ON
        </div>
        <div className="text-base font-bold tracking-tight leading-tight mt-0.5">
          Google Play
        </div>
      </div>
    </button>
  );
};

interface StoreDownloadButtonsProps {
  className?: string;
  appleBtnId?: string;
  googleBtnId?: string;
}

export const StoreDownloadButtons: React.FC<StoreDownloadButtonsProps> = ({
  className = "",
  appleBtnId = "download-apple-store-btn",
  googleBtnId = "download-google-play-btn",
}) => {
  return (
    <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 ${className}`}>
      <AppleStoreButton id={appleBtnId} />
      <GooglePlayButton id={googleBtnId} />
    </div>
  );
};
