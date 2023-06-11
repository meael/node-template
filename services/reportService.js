import { botSendMessage as botSendMessage } from "./botService.js";

export const reportError = (text) => {
  return botSendMessage({ text: `🚨 Ошибкова: ${text}` });
};
