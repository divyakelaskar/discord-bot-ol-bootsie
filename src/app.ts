import { BotEvents, DiscordBot } from './lib/DiscordBot';
import { Config, ConfigError } from './lib/ConfigTemplate';
import { Logger, LogLevel } from './lib/Logger';

/**
 * Main program entry point class.
 */
class Main {

  /**
   * Constructs a new Discord bot
   */
  constructor() {
    const config = this._loadConfiguration();
    const discordBot = new DiscordBot(config);

    discordBot.Events.on(BotEvents.BotReady, async user => {
      await Logger.log(`${process.env['npm_package_name']}:${process.env['npm_package_version']} ready!`, LogLevel.Info);
      await Logger.log(`Logged in as ${user.tag}`, LogLevel.Info);
    });
  }

  /**
   * Checks and loads startup configuration from configured environment variables and defaults
   * specified in ./ConfigTemplate/ConfigTemplate.json into Config object.
   * @returns Populated application Config
   */
  private _loadConfiguration(): Config {
    try {
      return new Config();
    }
    catch (e) {
      if (e instanceof ConfigError) {
        Logger.log(e.message, LogLevel.Error);
      }
    }
    process.exit(1);
  }

}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const main = new Main();