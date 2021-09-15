# MLD

USER(__user_id__, firstname, lastname, email, phone, birth_date, zip_code, city_name, country, street_name, street_number, password, role)

COMMENT(__comment_id__, body, note, created_at, #user_id, #offer_id)

MESSAGE(__message_idd__, title, body, created_at, #user_id, #offer_id)

BOOKING(__booking_id__, reservation_start, reservation_end, #user_id, #offer_id)

OFFER(__offer_id__, title, description,address, geolocalisation, price, #picture_id)

PICTURE(__picture_id__, main_picture, galery_picture_1, galery_picture_2, galery_picture_3, galery_picture_4, galery_picture_5)

NEWSLETTER(__newsletter_id__, firstname, lastname, email)

USER_OFFER(#user_id, #offer_id)
