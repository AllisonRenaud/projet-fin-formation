-- Revert ochalet:sql_create_update_functions from pg

BEGIN;

DROP FUNCTION new_offer(json);
DROP FUNCTION update_offer(json);

DROP FUNCTION new_message(json);
DROP FUNCTION update_message(json);

COMMIT;
