-- Deploy ochalet:sql_create_update_functions to pg

BEGIN;

CREATE FUNCTION new_offer(myRecord json) RETURNS int AS $$
	INSERT INTO "offer" ("title", "body", "zip_code", "city_name", "country", "street_name", "street_number", "price_ht", "tax", "main_picture", "location_id")
	VALUES (
		myRecord->>'title',
		myRecord->>'body',
		myRecord->>'zip_code',
		myRecord->>'city_name',
		myRecord->>'country',
		myRecord->>'street_name',
		myRecord->>'street_number',
		(myRecord->>'price_ht')::int,
		(myRecord->>'tax')::int,
		myRecord->>'main_picture',
        (myRecord->>'location_id')::int
	) RETURNING id
$$ LANGUAGE SQL STRICT;

CREATE FUNCTION update_offer(json) RETURNS void AS $$
	UPDATE "offer" SET
		title=$1->>'title',
		body=$1->>'body',
		zip_code=$1->>'zip_code',
		city_name=$1->>'city_name',
		country=$1->>'country',
		street_name=$1->>'street_name',
		street_number=$1->>'street_number',
		latitude=$1->>'latitude',
		longitude=$1->>'longitude',
		price_ht=($1->>'price_ht')::int,
		tax=($1->>'tax')::int,
		main_picture=$1->>'main_picture',
		galery_picture_1=$1->>'galery_picture_1',
		galery_picture_2=$1->>'galery_picture_2',
		galery_picture_3=$1->>'galery_picture_3',
		galery_picture_4=$1->>'galery_picture_4',
		galery_picture_5=$1->>'galery_picture_5',
        location_id=($1->>'location_id')::int
	WHERE id=($1->>'id')::int;
$$ LANGUAGE SQL STRICT;




COMMIT;
