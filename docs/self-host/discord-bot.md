---
sidebar_position: 3
---

# Setting up a Discord Bot
In order to actually recieve notifications for new emails, you need a discord bot.

## Creating the discord bot
Navigate to the [Discord Developer Portal > Applications](https://discord.com/developers/applications) and press `New Application`.

![img](discord-bot-images/image.png)

<br />

Give your application a **NAME**, accept the **Discord Developer Terms of Service and Developer Policy**, and press **Create**.

![img](discord-bot-images/image-1.png)


<br />


## Resetting the discord bots's token
Navigate to the **Bot** tab on the sidebar and press **Reset Token**. Press **Yes, do it!** to confirm. Enter your 2FA code it prompted.

![img](discord-bot-images/image-2.png)
![img](discord-bot-images/image-3.png)


<br />

Copy the newly generated bot token, open the `.env` file in the cloned repository's files and paste the copied token as the `bot_token` environment variable value.

![img](discord-bot-images/image-4.png)
![img](discord-bot-images/image-5.png)


## Setting up OAuth for the discord bot

Navigate to the **OAuth2 > General** tab on the sidebar and press the **Copy** button below **CLIENT ID**. Open the `.env` file in the cloned repository's files and paste the copied client ID as the `bot_client_id` environment variable value.

![img](discord-bot-images/image-6.png)
![img](discord-bot-images/image-12.png)

<br />

Now, reset bot's **CLIENT SECRET** by pressing the **Reset Secret** button. Similarly to resetting the bot's token, press **Yes, do it!**, and enter your 2FA code if prompted.

![img](discord-bot-images/image-7.png)

Press the **Copy** button below your newly generated client secret in order to copy it to your clipboard. Open the `.env` file in the cloned repository's files and paste the copied client secret as the `bot_client_secret` environment variable value.

![img](discord-bot-images/image-8.png)
![img](discord-bot-images/image-9.png)


<br />

Next, you must add a redirect URI for your instance of Enotify's website. In order to do so, press the **Add Redirect** button.

![img](discord-bot-images/image-10.png)

Enter the base URL you will be hosting your instance of Enotify's website on, followed by the `/discord/callback` route. In this example, we are using `https://example.com` as our base URL, so we will add the `https://example.com/discord/callback` redirect URI. Once you have entered the correct redirect URI, press **Save Changes** to confirm.

![img](discord-bot-images/image-11.png)


<br />

Congrats! Your discord bot is now all set!
