import { Context } from 'telegraf';
import createDebug from 'debug';

import { author, name, version } from '../../package.json';

const debug = createDebug('bot:about_command');

const info = () => async (ctx: Context) => {
  debug(`Triggered "about" command with message`);
  await ctx.replyWithMarkdownV2('info', { parse_mode: 'Markdown' });
};

export { info };
