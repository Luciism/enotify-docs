---
sidebar_position: 1
description: "Configure a Google Cloud project used by Enotify"
---

# Creating Google Cloud Project

Firstly, head over to [Google Cloud Console > New Project](https://console.cloud.google.com/projectcreate) and **make sure you are logged into the google account you wish to create the Google Cloud Project on**.


<br />

Give your project a name, and optionally, a custom ID, then press **CREATE**.

![img](creating-project-images/image.png)


<br />


## Enable Gmail API

In your newly created project, navigate to `APIs & Services > Enabled APIs & Services`.

![img](creating-project-images/image-1.png)


Press the **+ ENABLE APIS AND SERVICES** button at the top of the page, then scroll down and select the `Gmail API` panel listed under the `Google Workspace` category.

![img](creating-project-images/image-2.png)
![img](creating-project-images/image-3.png)


<br />

Once on the Gmail API page, press the **ENABLE** button to enable the Gmail API.

![img](creating-project-images/image-4.png)


<br />


## Create credentials

After enabling the Gmail API, you must create credentials in order to interact with it. Press the **CREATE CREDENTIALS** button.

![img](creating-project-images/image-5.png)


<br />

In the **Select an API** dropdown, ensure that **Gmail API** is selected. Select **User data** and press **NEXT**.

![img](creating-project-images/image-6.png)


<br />

Choose an **App name**, select an available **User support email**, add at least one email address under **Developer contact information**, and optionally, upload a logo. Once complete, press **SAVE AND CONTINUE**.

![img](creating-project-images/image-7.png)


<br />

Next, you must add the scopes required in order for Enotify to function. First press **ADD OR REMOVE SCOPES**, then select `https://www.googleapis.com/auth/userinfo.email` as well as `https://www.googleapis.com/auth/gmail.readonly`. Once both are selected, press **UPDATE**.

![img](creating-project-images/image-8.png)
![img](creating-project-images/image-9.png)


Scroll down to the bottom of the *Scopes* section and press **SAVE AND CONTINUE**.

![img](creating-project-images/image-10.png)


<br />

Next, you must setup your *OAuth Client ID*. For **Application type** select **Web application**, and choose a name for your client ID.

![img](creating-project-images/image-11.png)


Under *Authorized JavaScript origins*, add the base URL that you will be hosting your instance of Enotify's website on. In this example, we are using `https://example.com` as a base URL.

Under *Authorized redirect URIs*, add the base URL that you will be hosting your instance of Enotify's website on, followed by the `/gmail/callback` route. In this example we are using `https://example.com` as a base URL, therefore we add `https://example.com/gmail/callback` as an *Authorized redirect URI*.

![img](creating-project-images/image-12.png)


<br />

Scroll down to the bottom of the *Create credentials* page, and press **DONE**.

![img](creating-project-images/image-13.png)


<br />


## Save credentials

Now that you have created your *OAuth Client ID*, you must save the credentials for it. Navigate to the `APIs & Services > Credentials` page, and press the pencil (edit) button next to your newly created OAuth client ID.

![img](creating-project-images/image-14.png)


<br />

Copy the **Client ID**, and **Client secret** on the right side of the screen, open the `.env` file in the cloned repository's files, and paste them as the `gcloud_client_id` and `gcloud_client_secret` environment variable values.

![img](creating-project-images/image-15.png)
![img](creating-project-images/image-16.png)


<br />


## Add test users

In order to use the Gmail API with Enotify before your Google Cloud project is verified, you must add yourself as a test user.

To add yourself as a test user navigate to `APIs & Services > OAuth consent screen` and press the **+ ADD USERS** button below *Test users*.

![img](creating-project-images/image-17.png)


<br />

Enter the desired test user email address and press **SAVE**.

![img](creating-project-images/image-18.png)