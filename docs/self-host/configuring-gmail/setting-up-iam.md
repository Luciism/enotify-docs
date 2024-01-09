---
sidebar_position: 2
description: "Set up necessary permissions to recieve requests for new emails"
---


# Setting up IAM service accounts

Navigate to `IAM & Admin > Service Accounts` on the dashboard for your Google Cloud project, then press **+ CREATE SERVICE ACCOUNT**.

![img](configuring-iam-images/image.png)
![img](configuring-iam-images/image-1.png)


<br />

Enter a **Service account ID**, and optionally a **Service account name** as well as a **Service account description**. Press **CREATE AND CONTINUE** to proceed.

![img](configuring-iam-images/image-2.png)


<br />

Add the **Pub/Sub Publisher** role and press **DONE**.

![img](configuring-iam-images/image-3.png)


<br />

Navigate to `IAM & Admin > IAM` and press **GRANT ACCESS**.

![img](configuring-iam-images/image-4.png)


<br />

Under *Add principals*, add `gmail-api-push@system.gserviceaccount.com` to the list of **New principals**. Next, assign the **Pub/Sub Publisher** role, then press **SAVE**.

![img](configuring-iam-images/image-5.png)
