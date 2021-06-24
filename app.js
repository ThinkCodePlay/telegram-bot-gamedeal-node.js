const { gameDeal } = require("./utils/cheapshark");

require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");

const token = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/game (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const gameName = match[1];

  const deal = await gameDeal(gameName);
  bot.sendMessage(chatId, deal);
});
