import { Context, Markup } from 'telegraf';
import createDebug from 'debug';

const debug = createDebug('bot:about_command');

const example = 'https://feathers.studio/telegraf/webapp/example';
const testUrl = 'https://e91f-39-128-55-53.ngrok-free.app/';
const prodUrl = process.env.TMA_URL as string;
const ENVIRONMENT = process.env.NODE_ENV || '';

const dailyTest = () => async (ctx: Context) => {
  debug(`Triggered "dailytest" command with message`);
  const url = ENVIRONMENT !== 'production' ? testUrl : testUrl;
  // await ctx.setChatMenuButton({
  //   text: 'Launch',
  //   type: 'web_app',
  //   web_app: { url: testUrl },
  // });
  const message = `*Go To Your Daily Test \\!*\nClick on the button below to launch your daily test\\!\n${ENVIRONMENT !== 'production' ? 'This is a test environment' : ''}`;
  await ctx.replyWithMarkdownV2(
    message,
    Markup.inlineKeyboard([Markup.button.webApp('📖', url)]),
  );
};

export { dailyTest };
