CREATE PROCEDURE u930882479_chocochapin.SPR_LOGIN(
  p_correo_electronico VARCHAR(100),
  p_clave              VARCHAR(1000)
)
BEGIN
  DECLARE v_existe              INT(3);
  DECLARE v_id_usuario          INT(24);
  DECLARE v_id_compania         INT(24);
  DECLARE v_token               VARCHAR(256);
  DECLARE v_tiempo_expiracion   INT(24);
  DECLARE v_fecha_inicio_sesion DATETIME;
  DECLARE v_fecha_fin_sesion    DATETIME;
  DECLARE v_errm                VARCHAR(1000);
  DECLARE v_next_id             INT;

  -- Verifica las credenciales del usuario
  SELECT COUNT(0) INTO v_existe
  FROM USUARIOS
  WHERE UPPER(correo_electronico) = UPPER(p_correo_electronico)
    AND clave = p_clave
    AND estado = 'A';

  IF (v_existe > 0) THEN
    -- Obtener id_compania e id_usuario
    SELECT id_compania, id_usuario INTO v_id_compania, v_id_usuario
    FROM USUARIOS
    WHERE UPPER(correo_electronico) = UPPER(p_correo_electronico)
      AND estado = 'A'
    LIMIT 1;

    -- Obtener tiempo de expiración de la sesión
    SELECT tiempo_expira_sesion INTO v_tiempo_expiracion
    FROM PARAMETROS_GENERALES
    LIMIT 1;

    -- Generar un nuevo token (usando tu función NEW_UUID)
    SELECT NEW_UUID() INTO v_token;

    SET v_fecha_inicio_sesion = NOW();
    SET v_fecha_fin_sesion = NOW();

    -- Obtener el siguiente ID para la sesión
    SELECT IFNULL(MAX(id_sesion), 0) + 1 INTO v_next_id
    FROM SESIONES;

    -- Insertar nueva sesión
    INSERT INTO SESIONES (id_sesion, id_compania, id_usuario, token, fecha_login, fecha_expiracion)
    VALUES (v_next_id, v_id_compania, v_id_usuario, v_token, v_fecha_inicio_sesion, v_fecha_fin_sesion);

  SELECT 
    'nombre_de_usuario' AS nombre,
    p_correo_electronico AS correo_electronico,
    'N' AS es_administrador_general,
    v_id_usuario AS id_usuario,
    v_token AS token,
    v_tiempo_expiracion AS tiempo_expiracion,
    v_fecha_inicio_sesion AS fecha_inicio_sesion,
    v_fecha_fin_sesion AS fecha_fin_sesion,
    'nombre_compania' AS nombre_compania,
    'tema_default' AS tema,
    'es' AS idioma;
  ELSE
    SELECT 
      'ERROR' AS status,
      'Usuario o clave inválido' AS message;
  END IF;

      COMMIT;

END;