# MLD

USER(__user_id__, firstname, lastname, email, phone, birth_date, zip_code, city_name, country, street_name, street_number, password, role)

COMMENT(__comment_id__, body, note, created_at, #user_id, #offer_id)

MESSAGE(__message_id__, firstname, lastname, email, reservation_start, reservation_end, nb_persons, body, created_at, message_status, #user_id, #offer_id)

BOOKING(__booking_id__, reservation_start, reservation_end, reservation_status, message, #user_id, #offer_id)

OFFER(__offer_id__, title, description,address, geolocalisation, price, main_picture, galery_picture_1, galery_picture_2, galery_picture_3, galery_picture_4, galery_picture_5)
