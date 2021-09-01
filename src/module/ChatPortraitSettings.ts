export interface ChatPortraitSettings {
  useTokenImage: boolean;
  useTokenName: boolean;
  portraitSize: number;
  portraitSizeItem: number;
  borderShape: string;
  useUserColorAsBorderColor: boolean;
  borderColor: string;
  borderWidth: number;
  useUserColorAsChatBackgroundColor: boolean;
  useUserColorAsChatBorderColor: boolean;
  flavorNextToPortrait: boolean;
  forceNameSearch: boolean;
  // hoverTooltip: boolean,
  textSizeName: number;
  displaySetting: string;
  useAvatarImage: boolean;
  displayPlayerName: boolean;
  displayUnknown: string;
  displayUnknownPlaceHolderActorName: string;
  displayUnknownPlaceHolderItemName: string;
  displayUnknownPlaceHolderItemIcon: string;
  displaySettingOTHER: boolean;
  displaySettingOOC: boolean;
  displaySettingIC: boolean;
  displaySettingEMOTE: boolean;
  displaySettingWHISPER: boolean;
  displaySettingROLL: boolean;
  displaySettingWhisperToOther: boolean;
  customStylingMessageText: string;
  displayMessageTag: boolean;
  useImageReplacer: boolean;
  useImageReplacerDamageType: boolean;
  applyOnCombatTracker: boolean;
  applyPreCreateChatMessagePatch: boolean;
}
