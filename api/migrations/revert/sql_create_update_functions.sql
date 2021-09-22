-- Revert ochalet:sql_create_update_functions from pg

BEGIN;

DROP FUNCTION new_offer(json);
DROP FUNCTION update_offer(json);

COMMIT;
