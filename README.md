# discord-bot-ol-bootsie
Ol' Bootsie is a Discord bot written in Node.js that interfaces with the OpenAI API.

## Table of contents
* [Requirements](#requirements)
* [Setup](#setup)
  * [Local execution](#local-execution)
  * [Container execution](#container-execution)
    * [Obtaining the container from Docker Hub](#obtaining-the-container-from-docker-hub)
    * [Building the container from source](#building-the-container-from-source)
    * [Running the container](#running-the-container)
* [Release history](#release-history)

## Requirements
* Create an application and bot via the [Discord Developer Portal](https://discord.com/developers/).
* Set up pay-as-you-go OpenAI API access [here](https://platform.openai.com/account/) - this is very inexpensive, but be sure to set a spending limit and warning level.
* An always-on machine or environment to run the application on.

## Setup

### Local execution
> Requires the `git`, `nodejs`, and `npm` packages.

Clone this repo:
```
git clone https://github.com/jlyons210/discord-bot-ol-bootsie.git
```
Install dependencies:
```
npm install
```
Run the application:
> Configuration settings with acceptable defaults may be omitted.

```
 BOT_AUTO_ENGAGE_MIN_MESSAGES=number (default: 6) \
 BOT_AUTO_ENGAGE_PROBABILITY=number (default: 0.05) \
 BOT_AUTO_REACT_PROBABILITY=number (default: 0.05) \
 BOT_CONVERSATION_MODE=channel|user (default: channel) \
 BOT_CONVERSATION_RETAIN_SEC=number (default: 900) \
 BOT_CREATE_IMAGE_FEATURE=enabled|disabled (default: disabled) \
 BOT_CREATE_IMAGE_TAG=string (default: {ai-image}) \
 BOT_CREATE_IMAGE_USER_TOKENS=number (default: 3) \
 BOT_CREATE_IMAGE_USER_TOKENS_EXPIRE_SEC=number (default: 3600) \
 BOT_LOG_DEBUG=enabled|disabled (default: disabled) \
 DISCORD_BOT_TOKEN=string (bot token) \
 OPENAI_API_KEY=string (api key) \
 OPENAI_MAX_RETRIES=number (default: 5) \
 OPENAI_PARAM_MAX_TOKENS=number (default: 600) \
 OPENAI_PARAM_MODEL=model (default: gpt-3.5-turbo) \
 OPENAI_PARAM_SYSTEM_PROMPT=string (example: "A system prompt that describes how the chat bot should behave") \
 OPENAI_PARAM_TEMPERATURE=number (default: 0.6) \
npx ts-node src/app.ts
```

### Container execution
> Requires Docker Engine - [installation instructions](https://docs.docker.com/engine/install/)

#### Obtaining the container from Docker Hub
Pull image from Docker Hub:
```
docker pull jlyons210/discord-bot-ol-bootsie:latest
```

#### Building the container from source
Clone this repo:
```
git clone https://github.com/jlyons210/discord-bot-ol-bootsie.git
```
Build container image:
```
docker build -t discord-bot-ol-bootsie:latest .
```

#### Running the container
> Configuration settings with acceptable defaults may be omitted.

```
docker run -d \
  -e BOT_AUTO_ENGAGE_MIN_MESSAGES=number (default: 6) \
  -e BOT_AUTO_ENGAGE_PROBABILITY=number (default: 0.05) \
  -e BOT_AUTO_REACT_PROBABILITY=number (default: 0.05) \
  -e BOT_CONVERSATION_MODE=channel|user (default: channel) \
  -e BOT_CONVERSATION_RETAIN_SEC=number (default: 900) \
  -e BOT_CREATE_IMAGE_FEATURE=enabled|disabled (default: disabled) \
  -e BOT_CREATE_IMAGE_TAG=string (default: {ai-image}) \
  -e BOT_CREATE_IMAGE_USER_TOKENS=number (default: 3) \
  -e BOT_CREATE_IMAGE_USER_TOKENS_EXPIRE_SEC=number (default: 3600) \
  -e BOT_LOG_DEBUG=enabled|disabled (default: disabled) \
  -e DISCORD_BOT_TOKEN=string (bot token) \
  -e OPENAI_API_KEY=string (api key) \
  -e OPENAI_MAX_RETRIES=number (default: 5) \
  -e OPENAI_PARAM_MAX_TOKENS=number (default: 600) \
  -e OPENAI_PARAM_MODEL=model (default: gpt-3.5-turbo) \
  -e OPENAI_PARAM_SYSTEM_PROMPT=string (example: "A system prompt that describes how the chat bot should behave") \
  -e OPENAI_PARAM_TEMPERATURE=number (default: 0.6) \
discord-bot-ol-bootsie:latest (built) -or- jlyons210/discord-bot-ol-bootsie:latest (pulled)
```

## Release history

### Shortcuts:
* 0.12.x: [0.12.0](#0120-2023-06-08)
* 0.11.x: [0.11.0](#0110-2023-06-02), [0.11.1](#0111-2023-06-04), [0.11.2](#0112-2023-06-05),[0.11.3](#0113-2023-06-07)
* 0.10.x: [0.10.0](#0100-2023-05-31), [0.10.1](#0101-2023-05-31), [0.10.2](#0102-2023-05-31)
* 0.9.x: [0.9.0](#090-2023-05-29)
* 0.8.x: [0.8.0](#080-2023-05-28)
* 0.7.x: [0.7.0](#070-2023-05-02), [0.7.1](#071-2023-05-20)
* 0.6.x: [0.6.0](#060-2023-04-26), [0.6.1](#061-2023-04-30), [0.6.2](#062-2023-04-30), [0.6.3](#063-2023-04-30), [0.6.4](#064-2023-04-30)
* 0.5.x: [0.5.0](#050-2023-04-25)
* 0.4.x: [0.4.0](#040-2023-04-17), [0.4.1](#041-2023-04-18), [0.4.2](#042-2023-04-18), [0.4.3](#043-2023-04-19), [0.4.20](#0420-2023-04-20), [0.4.21](#0421-2023-04-23), [0.4.22](#0422-2023-04-23), [0.4.23](#0423-2023-04-23), [0.4.24](#0424-2023-04-24)
* 0.3.x: [0.3.0](#030-2023-04-17), [0.3.1](#031-2023-04-17)
* 0.2.x: [0.2.0](#020-2023-04-16)
* 0.1.x: [0.1.0](#010-2023-04-14)

---
### 0.12.0 (2023-06-08)
* [Issue #75](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/75) - Resolved, ended up doing a larger refactor.
  * Created a `DiscordBotMessage` class that contains Discord `Message` objects and bot metadata and functionality, and moved that from `DiscordBot`. This reduces the amount of `discordMessage` passing that was happening in `DiscordBot` as the functionality has moved to `DiscordBotMessage` properties.
  * Reorganized files into a better directory and import/export structure.
  * Configuration variable changes:
    * `BOT_CONVO_MODE` renamed to `BOT_CONVERSATION_MODE`
    * `BOT_CONVO_RETAIN_SEC` renamed to `BOT_CONVERSATION_RETAIN_SEC`

### 0.11.3 (2023-06-07)
* [Issue #74](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/74) - Resolved; see issue for notes.
* Minor updates to package dependencies.

### 0.11.2 (2023-06-05)
* [Issue #79](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/79) - Resolved. `_embedImageFromPromptMessage()` now supports base64 encoded file attachments and URL images, and is using base64 encoded attachments for persistence.

### 0.11.1 (2023-06-04)
* [Issue #72](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/72) - Resolved; see issue for notes.
* [Issue #73](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/72) - Resolved; see issue for notes.

### 0.11.0 (2023-06-02)
* [Issue #70](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/68) - Implemented the OpenAI `CreateImage` API:
  * New configuration variables:
    * `BOT_CREATE_IMAGE_FEATURE`: enabled/disabled (default: disabled)
    * `BOT_CREATE_IMAGE_TAG`: string (default: `{ai-image}`)
    * `BOT_CREATE_IMAGE_USER_TOKENS`: number (default: 3)
    * `BOT_CREATE_IMAGE_USER_TOKENS_EXPIRE_SEC`: number (default: 3600)
  * Implemented a token/bucket system for rate-limiting users, as the CreateImage API call is pretty expensive compared to chat completions.

### 0.10.2 (2023-05-31)
* [Issue #68](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/68) - fixed by adding inner try/catch blocks to `.forEach()` in `DiscordBot._handleMessageCreate()` and `DiscordBot._probablyReactToMessage()`.

### 0.10.1 (2023-05-31)
* [Issue #63](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/63) - added regex check and character replacement to `PayloadMessage.name`
* [Issue #64](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/64) - added error checks for all calls to `OpenAI.requestChatCompletion()`

### 0.10.0 (2023-05-31)
* [Issue #13](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/13):
  * Updated `_probablyEngageInConversation()` and `_probablyReactToMessage()`:
    * Got rid of `MessageHistory.isDirectEngagement` flag, as it was used for filtering context to direct engagements only, which is unnecessary.
    * Both functions send better prompts to OpenAI API now.
    * Number of emojis in reactions reduced from 2 to 1.
* Fixed broken error handling in `lib/OpenAI/OpenAI.ts`
* Cleanup:
  * Making better use of interfaces for constructing `HistoryMessage`, `PromptPayload`, and `Log` entries.

### 0.9.0 (2023-05-29)
* [Issue #57](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/57) - Renamed thread signature to "conversation key" throughout code.
  * Configuration variable changes:
    * `BOT_THREAD_MODE` renamed to `BOT_CONVO_MODE`
    * `BOT_THREAD_RETAIN_SEC` renamed to `BOT_CONVO_RETAIN_SEC`
* [Issue #50](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/50) - Improved DiscordAPIError logging in `DiscordBot._probablyReactToMessage()`.
* [Issue #36](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/36) - Changed pagination delimiter from `\n\n` to `\n` to resolve issues with long responses with single line breaks between paragraphs.
* Cleanup:
  * Changed all instances of `parseInt(*.toString())` and `parseFloat(*.toString())` to `Number(*)`.
  * Changed all instances of `*.toString()` to `String(*)`.
  * `app.ts/Main()` changed `discordBot.Events.on(BotEvents.BotReady, ...` to `discordBot.Events.once(BotEvents.BotReady, ...`
  * `Dockerfile` runs `CMD ["npm", "start"]` instead of `CMD ["npm", "run", "start"]`

### 0.8.0 (2023-05-28)
* [Issue #51](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/51) - Ported the entire codebase to TypeScript, and refactored using object-oriented design principals.
  * Directory structure improved to support `tsc` builds:
    * Moved source code under `./src`
    * `tsc` transpilation goes to `./dist`
    * Restructured `/lib`
  * Modified dev dependencies to support TypeScript development.
    * Using new `.eslintrc` and `.eslintignore` files.
  * Updated `Dockerfile` to perform a multi-stage build.
* Config updates:
  * Renamed `lib-config-template.js` (configTemplate) to `./lib/Config` (Config).
  * Moved `.config-template.json` from `./` to `./lib/ConfigTemplate/ConfigTemplate.json`.
  * Updated configuration defaults:
    * `BOT_AUTO_ENGAGE_PROBABILITY` from `0.2` to `0.05`
    * `BOT_AUTO_REACT_PROBABILITY` from `0.2` to `0.05`
    * `BOT_THREAD_RETAIN_SEC` from `600` to `900`
    * `OPENAI_PARAM_MAX_TOKENS` from `500` to `600`
* Updated npm dependencies.
* Cleaned up incorrect instructions in `README.md`.
* Lots of other changes under the hood to enable faster feature development.

### 0.7.2 (2023-05-22)
* [Issue #52](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/52) - fixed new bug discovered after errors were handled correctly.

### 0.7.1 (2023-05-20)
* [Issue #52](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/52) - 429 errors were not considered retryable; fixed.

### 0.7.0 (2023-05-02)
* [Issue #13](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/13) - Bots will now engage and react to channel comments, unprompted!
  * Added new config settings:
    * `BOT_AUTO_ENGAGE_MIN_MESSAGES` - a minimum number of messages required for a bot to automatically engage in conversation.
    * `BOT_AUTO_ENGAGE_PROBABILITY` - a decimal percentage value from 0.0-1.0 defining the probability that a bot will engage in comments.
    * `BOT_AUTO_REACT_PROBABILITY` - a decimal percentage value from 0.0-1.0 defining the probability that a bot will react to comments.
  * I expect this will be a funky release, so upgrade at your own peril. I'll be running for a while and fine-tuning the behavior.

### 0.6.4 (2023-04-30)
* [Issue #46](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/46) - A bot @-mention with additional bots tagged will now strip the other bot tags instead of translating to name.
  * Sometimes bots take other bot names into consideration in their prompt responses, which is undesired behavior.

### 0.6.3 (2023-04-30)
* [Issue #39](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/39) - Moved libDiscord.pruneOldThreadMessages() from the message received handler to a 15 second timer job to prevent extraneous executions and debug logging.

### 0.6.2 (2023-04-30)
* [Issue #42](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/42) - Bot now replies to the comment that prompted its response in channels.

### 0.6.1 (2023-04-30)
* [Issue #36](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/36) - Fixed OpenAI response >2000 characters being rejected by Discord channel.send().
  * Breaks multi-paragraph responses >2000 characters into a channel.send() paragraph.
  * There are still some possibilities for issues, like long code blocks being broken, or >2000 character unbroken paragraphs being too long. Will monitor and address later if needed.

### 0.6.0 (2023-04-26)
* [Issue #9](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/9) - Added bot direct message support. You can now DM the bot, no @-mention needed!

### 0.5.0 (2023-04-25)
* [Issue #33](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/33) - Rebuilt startup environment checking. It was clunky and not extensible.
  * Created `.config-template.json` to store and define attributes for expected environment variables/settings.
    * `name`: (string) The name of the environment variable, e.g. `BOT_LOG_DEBUG`.
    * `allowedValues`: (string/list) Pre-defined acceptable input values.
    * `defaultValue`: (string/number) Pre-defined default value, so it doesn't need to be provided at runtime!
    * `required`: (bool) Whether or not the user must provide the value, e.g. API keys.
    * `secret`: (bool) Whether or not the configured value is a secret - causes it to be displayed masked, e.g. API keys.
    with allowed values, default values, and whether the values are required as inputs or are secrets.
  * Updated `README.md` launch instructions.

### 0.4.24 (2023-04-24)
* [Issue #34](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/34) - `DISCORD_APP_TOKEN` in code actually required the Discord bot token from the Discord Developer Portal. Fixed naming for clarity.

### 0.4.23 (2023-04-23)
* [Issue #30](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/30) - `OPENAI_ORG_ID` was not fully removed from settings causing failed startup checks. Cleaned up.

### 0.4.22 (2023-04-23)
* FR [issue #24](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/24) - Have OpenAI API generate try-again messages sent as chat responses.
* Cleanup:
  * Removed `OPENAI_ORG_ID` from environment settings.

### 0.4.21 (2023-04-23)
* Added `HistoryMessageAnalysis` class that performs mood, sentiment, and tone analysis of `HistoryMessage` messages.
* Added support for one-off prompt payloads and responses. Meant for internal use by the application for generating message analysis and things like error responses sent to chat.
* Added "break-glass" debug logging by creating a file named `DEBUG` (case-sensitive) to the app working directory. This enables debug logging without restarting the application.
* Cleanup:
  * Updated `Dockerfile` working directory from `/app` to `/usr/src/app`.
  * Added `.dockerignore`
  * Removed extraneous carriage returns in code for readability.
  * Libraries:
    * Moved some common bot code to `lib/lib-bot.js`.
    * Moved more code to `lib/lib-discord.js` and `lib/lib-openai.js`.
* Bug fixes:
  * Fixed behavioral bug in `pruneMessageHistory()` - [issue #26](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/26):
    * Now only evaluates for expired TTL, irrespective of `threadSignature`.

### 0.4.20 (2023-04-20)
* Refactored code into multiple .js files to better group functionality - [issue #16](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/16):
  * Discord-specific functions moved to `lib/lib-discord.js`
  * OpenAI-specific functions moved to `lib/lib-openai.js`
* Changed all synchronous functions to `async` with `await` calls to stop blocking the event loop (possibly causing [issue #14](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/14)).
* Updated OpenAI API call retry logic:
  * Instead of retrying indefinitely on 5XX errors, `retryRequest (bool)` was changed to `remainingRetryCount` which starts with the `OPENAI_MAX_RETRIES` environment setting.
  * The retry loop decrements. Fatal errors (4XX) will immediately decrement the loop to `0` to prevent retry.
* Fixed a big glitch in the `README.md` documentation:
  * [Local execution](#local-execution) with `node` requires environment set up.
* Added optional `BOT_LOG_DEBUG` environment setting to toggle `debug` logging level.
* Added message collection for all messages (subject to `BOT_THREAD_RETAIN_SEC`) for upcoming features - [issue #14](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/14)
* Bug fixes:
  * Solved a bug in `pruneOldThreadMessages()` that would always result in one message not being pruned.

### 0.4.3 (2023-04-19)
* Removed unused `DISCORD_GUILD_ID` and `DISCORD_CLIENT_ID` environment settings - [issue #20](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/20).

### 0.4.2 (2023-04-18)
* Added logging of non-sensitive startup parameters - [issue #15](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/15)
* Added debug logging to pruning function, suspect it may get stuck in a loop - [issue #14](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/14). Issue remains open until cause of hang is identified.
* Added [Table of Contents](#table-of-contents) to `README.md`.
* Bug fixes:
  * Improved error handling for empty OpenAI API responses, added trap for 4XX (fatal) and 5XX (retriable) errors - [issue #17](https://github.com/jlyons210/discord-bot-ol-bootsie/issues/17).

### 0.4.1 (2023-04-18)
* Added package `name:version` to startup logging.
* Added conversational continuity.
  * Requires new environment settings `BOT_THREAD_MODE=[channel|user]` and `BOT_THREAD_RETAIN_SEC=[seconds]`
  * ~~Experimental~~ Added Discord username to OpenAI prompt under optional `name` field.
    * This will remain in place! It allows the system prompt to treat different chat users uniquely.

### 0.4.0 (2023-04-17)
* Updated app.js to support `gpt-3.5-turbo`.
  * Using `openAiClient.createChatCompletion()` instead of `openAiClient.createCompletion()`.
  * This limits supported models to `gpt-4` (not yet public), `gpt-4-0314` (not yet public), `gpt-4-32k` (not yet public), `gpt-4-32k-0314` (not yet public), `gpt-3.5-turbo`, and `gpt-3.5-turbo-0301`.
    * This is fine, because per the [models documentation](https://platform.openai.com/docs/models/gpt-4), `gpt-3.5-turbo` is 1/10th the cost of `text-davinci-003`, and `gpt-4` is even better-er.
  * `openai-node` [PR #123](https://github.com/openai/openai-node/pull/123) looks like it will automate API endpoint switching based upon selected model. Monitoring for approval/merge.
* Removed $ shell prefixes from README.md code blocks to enable better use of the GitHub UI's copy button.

### 0.3.1 (2023-04-17)
* Updated logging timestamp to ISO 8601 format.
* Fixed indentation in app.js (2-space convention)

### 0.3.0 (2023-04-17)
* Removed `/chatgpt` and scaffolding for importing slash-commands.
* Updated secrets approach from using `.env` and `dotenv` with `docker build --build-arg [arg=]` (contaminates image with secrets) to `docker run -e [arg=]` to enable a credential-less container image that can be distributed.
* Improved console logging.
* Renamed entry point from `index.js` to `app.js`.
* Documented setup and version history in README.md.

### 0.2.0 (2023-04-16)
* Added support for @-mention of bot which is more conversational than slash-commands.
* Removed boilerplate slash-commands, leaving only `/chatgpt`.
* Moved OpenAI API parameter configurations to dotenv.

### 0.1.0 (2023-04-14)
* Initial commit
* Supports `/chatgpt prompt` and other boilerplate slash-commands.
* Containerized application, but image isn't portable is building requires Docker build-arg placement of dotenv
