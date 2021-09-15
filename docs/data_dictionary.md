# DATA DICTIONARY

## USER

|Field|Type|Specificities|Description|
|---|---|---|---|
|user_id|INT|GENERATED ALWAYS AS IDENTITY|user identification|
|firstname|TEXT|NOT NULL| user firstname|
|lastname|TEXT| NOT NULL|user lastname|
|email|TEXT| NOT NULL|user email|
|phone|TEXT| NOT NULL|user phone number|
|birth_date| DATE |NOT NULL|user birth|
|zip_code|TEXT |NOT NULL| user zip code|
|city_name|TEXT|NOT NULL| user city|
|country|TEXT|NOT NULL| user country|
|street_name|TEXT|NOT NULL|user street|
|street_number|TEXT|NOT NULL|user street number|
|password|TEXT|NOT NULL| user password|
|role|TEXT|NOT NULL DEFAULT 'user'|user role|

## COMMENT

|Field|Type|Specificities|Description|
|---|---|---|---|
|comment_id|INT|GENERATED ALWAYS AS IDENTITY|comment identification
|body|TEXT||comment content
|note|INT|NOT NULL|given note by user
|created_at|TIMESTAMPTZ|NOT NULL DEFAULT NOW()|comment creation date

## MESSAGE

|Field|Type|Specificities|Description|
|---|---|---|---|
|message_id|INT|GENERATED ALWAYS AS IDENTITY|message identification
|title|TEXT|NOT NULL|automaticly completed by offer title
|body|TEXT|NOT NULL|message payload completed by user
|created_at|TIMESTAMPTZ|NOT NULL DEFAULT NOW()|automaticly completed by actual date when message is posted

## BOOKING

|Field|Type|Specificities|Description|
|---|---|---|---|
|booking_id|INT|GENERATED ALWAYS AS IDENTITY| bookind identification|
|reservation_start|TIMESTAMPTZ|NOT NULL| first day of reservation|
|reservation_end|TIMESTAMPTZ|NOT NULL| last day of reservation|

## OFFER

|Field|Type|Specificities|Description|
|---|---|---|---|
|offer_id|INT|GENERATED ALWAYS AS IDENTITY|offer identification
|title|TEXT|NOT NULL|offer title
|description|TEXT|NOT NULL|offer description
|adress|TEXT|NOT NULL|adress of offer
|geolocation|TEXT|NOT NULL|lattitude and longitude in single string separted by space
|price|INT|NOT NULL|rent price for a week

## PICTURE

|Field|Type|Specificities|Description|
|---|---|---|---|
|picture_id|INT|GENERATED ALWAYS AS IDENTITY|picture identification|
|main_picture|TEXT|NOT NULL DEFAULT {url}|main picture|
|galery_picture_1|TEXT||first picture|
|galery_picture_2|TEXT||second picture|
|galery_picture_3|TEXT||third picture|
|galery_picture_4|TEXT||fourth picture|
|galery_picture_5|TEXT||fifth picture|

## NEWSLETTER

|Field|Type|Specificities|Description|
|---|---|---|---|
|newsletter_id|INT|GENERATED ALWAYS AS IDENTITY|newsletter identification|s
|firstname|TEXT|NOT NULL|user firstname|
|lastname|TEXT|NOT NULL|user lastname|
|email|TEXT|NOT NULL|user email|

## USER_OFFER

|Field|Type|Specificities|Description|
|---|---|---|---|
|user_id|INT|NOT NULL|user identification|
|offer_id|INT|NOT NULL|offer identification|
