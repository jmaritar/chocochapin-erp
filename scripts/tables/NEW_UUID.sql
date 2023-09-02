CREATE FUNCTION u930882479_chocochapin.NEW_UUID() 
RETURNS VARCHAR(32)
/********************************************************************************************************
RELACIÓN CON EL SISTEMA
Tipo Objeto || Objeto || Fecha Referencia || Quien lo incluyo || Descripcion de USO
			      ||      	|| 01/09/2023       || Mario Arita      || 
----------------------------------- MODIFICATION HISTORY ------------------------------------------------
Mario Arita    01/09/2023      Creación de procedimiento
**********************************************************************************************************/
BEGIN
  DECLARE l_random_num INT;
  DECLARE l_date CHAR(14);
  DECLARE l_uuid VARCHAR(40);

  -- Obtener una cadena de la fecha actual en formato YYYYMMDDHHMMSS
  SET l_date = DATE_FORMAT(NOW(), '%Y%m%d%H%i%S');

  -- Generar un número aleatorio
  SET l_random_num = FLOOR(RAND() * 65535);

  -- Crear un SHA1 hash de la fecha actual y el número aleatorio
  SET l_uuid = SHA1(CONCAT(l_date, l_random_num));

  -- Devolver los primeros 32 caracteres del hash
  RETURN SUBSTRING(l_uuid, 1, 32);
END