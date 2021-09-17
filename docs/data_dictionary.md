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
|user_name|TEXT|NOT NULL|user firstname
|body|TEXT|N/A|comment content
|note|INT|NOT NULL|given note by user
|created_at|TIMESTAMPTZ|NOT NULL DEFAULT NOW()|comment creation date

## MESSAGE

|Field|Type|Specificities|Description|
|---|---|---|---|
|message_id|INT|GENERATED ALWAYS AS IDENTITY|message identification
|firstname|TEXT|N/A|user firstname
|lastname|TEXT|N/A|user lastname
|email|TEXT|N/A|user email
|reservation_start|TIMESTAMPTZ|N/A|first day of reservation
|reservation_end|TIMESTAMPTZ|N/A|last day of reservation
|np_persons|INT|N/A|number of persons for the reservation
|body|TEXT|NOT NULL|message payload completed by user
|created_at|TIMESTAMPTZ|NOT NULL DEFAULT NOW()|automaticly completed by actual date when message is posted
|message_status|BOOL|NOT NULL DEFAULT TRUE|message status (TRUE : not seen / FALSE : seen)

## BOOKING

|Field|Type|Specificities|Description|
|---|---|---|---|
|booking_id|INT|GENERATED ALWAYS AS IDENTITY| bookind identification|
|reservation_start|TIMESTAMPTZ|NOT NULL| first day of reservation|
|reservation_end|TIMESTAMPTZ|NOT NULL| last day of reservation|
|reservation_status|TEXT|NOT NULL| reservation status|
|message|TEXT|| message from the admin to the user|

## OFFER

|Field|Type|Specificities|Description|
|---|---|---|---|
|offer_id|INT|GENERATED ALWAYS AS IDENTITY|offer identification
|title|TEXT|NOT NULL|offer title
|description|TEXT|NOT NULL|offer description
|adress|TEXT|NOT NULL|adress of offer
|geolocation|TEXT|NOT NULL|lattitude and longitude in single string separted by space
|price|INT|NOT NULL|rent price for a week
|main_picture|TEXT|NOT NULL DEFAULT {url}|main picture url|
|galery_picture_1|TEXT|N/A|first picture url|
|galery_picture_2|TEXT|N/A|second picture url|
|galery_picture_3|TEXT|N/A|third picture url|
|galery_picture_4|TEXT|N/A|fourth picture url|
|galery_picture_5|TEXT|N/A|fifth picture url|
|published|BOOL|NOT NULL DEFAULT FALSE|is the offer published ? (TRUE : yes / FALSE : no)|
