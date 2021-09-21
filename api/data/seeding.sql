BEGIN;

INSERT INTO "user" (
    "firstname", 
    "lastname", 
    "email", 
    "phone", 
    "birth_date", 
    "zip_code", 
    "city_name", 
    "country", 
    "street_name", 
    "street_number", 
    "password", 
    "role"
) VALUES 
('Christophe', 'SALLÉ', 'csallé@gmail.com', '0654204450', '2021-12-19 10:23:54+02', '59150', 'Lyon', 'France', 'rue de la liberté', '50', '123', 'user'),
('Benjamin', 'CHORON', 'bchoron@gmail.com', '0654154810', '2004-10-19 10:23:54+02', '75008', 'Paris', 'France', 'rue de la paix', '1', '123', 'admin'),
('Jerome', 'KARABENLI', 'jkarabenli@gmail.com', '0651554810', '2001-01-19 10:23:54+02', '75001', 'Lille', 'France', 'rue de la paix', '25', '123', 'user');

INSERT INTO "location" ("name", "picture") VALUES
('Jura', 'https://images.pexels.com/photos/6148803/pexels-photo-6148803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
('Alpes du Nord', 'https://images.pexels.com/photos/3136403/pexels-photo-3136403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
('Alpes du Sud', 'https://images.pexels.com/photos/5530144/pexels-photo-5530144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
('Pyrennées', 'https://images.pexels.com/photos/4877337/pexels-photo-4877337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
('Massif Central', 'https://images.pexels.com/photos/6360580/pexels-photo-6360580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
('Vosges', 'https://images.pexels.com/photos/5226950/pexels-photo-5226950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');

INSERT INTO "offer" (
    "title", 
    "body", 
    "zip_code", 
    "city_name", 
    "country", 
    "street_name", 
    "street_number", 
    "price_ht", 
    "tax", 
    "main_picture", 
    "galery_picture_1", 
    "galery_picture_2", 
    "galery_picture_3", 
    "galery_picture_4", 
    "galery_picture_5",
    "location_id"
) VALUES
(
    'La Perle des Bois', 
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat, lectus eu placerat mattis, nisl enim consequat leo, a ultrices dui nunc ac arcu. Pellentesque luctus diam vitae ligula mollis tempor. Aliquam vestibulum libero quis nisl dapibus venenatis. Nulla facilisi. In ac cursus dolor, eget fermentum sem. Phasellus facilisis sagittis justo eget pellentesque. Fusce eu luctus nulla, et tristique tortor. Vestibulum blandit felis ac lectus fermentum, ac cursus libero elementum. Donec euismod odio tortor, at porttitor massa rutrum sed.', 
    '88400', 
    'Gérardmer', 
    'France', 
    'impasse du Bas cellet', 
    '15', 
    2400, 
    30, 
    'https://scontent-cdg2-1.xx.fbcdn.net/v/t31.18172-8/23415491_129939911054712_866781972381791713_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=e3f864&_nc_ohc=ktQf7c5Y8KAAX-RwHXQ&_nc_ht=scontent-cdg2-1.xx&oh=46fdc9f458a7d4002a21f9de5078aada&oe=617031D4', 
    'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/62538944_352382702143764_258958743805362176_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=UjuIySfMJfcAX8hcDd1&_nc_ht=scontent-cdt1-1.xx&oh=b67b1c5704880045e852ed76b2017eb2&oe=616EC7F7', 
    'https://scontent-cdt1-1.xx.fbcdn.net/v/t31.18172-8/23467352_129931997722170_1099338796449142264_o.jpg?_nc_cat=109&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=fp4K7z9uqVMAX9TlLr5&_nc_ht=scontent-cdt1-1.xx&oh=e0ee4632adfedd652c5fa8d19ff322fc&oe=6170A36A', 
    'https://scontent-cdt1-1.xx.fbcdn.net/v/t31.18172-8/23456221_129931591055544_1784488383432218515_o.jpg?_nc_cat=106&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=Eu236hV0dowAX8YwSNj&tn=cPe0m3zPJWJoVRzC&_nc_ht=scontent-cdt1-1.xx&oh=a4a91d54e76c98aa37bf8580da9419c7&oe=616FB273', 
    'https://scontent-cdg2-1.xx.fbcdn.net/v/t31.18172-8/23511296_129931734388863_7915502139369921643_o.jpg?_nc_cat=108&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=zGmBg7gZfxQAX9VItrS&_nc_ht=scontent-cdg2-1.xx&oh=66b156a494a01a0309b3f31fa324f704&oe=616EC71B', 
    'https://scontent-cdg2-1.xx.fbcdn.net/v/t31.18172-8/25398404_138168486898521_2291663673322887402_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=7EekRBfuYiwAX9fqPGK&_nc_ht=scontent-cdg2-1.xx&oh=522106367a13bbcdf597b845db054376&oe=616F472B',
    5
),
(
    'super chalet', 
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis quod praesentium officiis voluptas fugit nihil harum tempora laudantium commodi at.', 
    '92700',
    'Marseille',
    'France',
    'rue de la soif',
    '50',
    2000,
    30,
    'https://images.pexels.com/photos/714258/pexels-photo-714258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/9587765/pexels-photo-9587765.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/3214973/pexels-photo-3214973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/36347/cow-pasture-animal-almabtrieb.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/2647053/pexels-photo-2647053.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/248167/pexels-photo-248167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    1
);

INSERT INTO "comment" ("user_id","offer_id","body","note") VALUES
(3,1,'super chalet, je recommande',5),
(2,2,'je me suis retrouvé au milieu des vaches',1),
(1,1,'moyen',3);

INSERT INTO "message" ("offer_id","user_id","reservation_start","reservation_end","nb_persons", "body") VALUES
(1, 1, '2021-10-16 10:00:00+02', '2021-10-23 14:00:00+02', 50, 'Bonjour, on aimerai venir avec ma famille.'),
(2, 3, '2021-12-18 10:00:00+02', '2021-12-25 14:00:00+02', 7, 'Bonjour, y a t il des vaches dans votre chalet ?');

INSERT INTO "booking" ("user_id","offer_id","reservation_start","reservation_end") VALUES
(1, 1, '2021-10-16 10:00:00+02', '2021-10-23 14:00:00+02'),
(3, 2, '2021-12-18 10:00:00+02', '2021-12-25 14:00:00+02');

COMMIT;