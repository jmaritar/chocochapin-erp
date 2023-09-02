CREATE PROCEDURE u930882479_chocochapin.SPR_USUARIOS_I(
  p_token                     VARCHAR(255),
  p_id_usuario			          VARCHAR(255),
  p_correo_electronico        VARCHAR(255),
  p_clave                     VARCHAR(255),
  p_nombre                    VARCHAR(255),
  p_fecha_inicio              VARCHAR(255),
  p_fecha_expiracion          VARCHAR(255),
  p_estado                    VARCHAR(255),
  p_es_administrador_general  VARCHAR(255),
  p_cambiar_clave             VARCHAR(255),
  resultado               OUT VARCHAR(255)
)
/********************************************************************************************************
RELACIÓN CON EL SISTEMA
Tipo Objeto || Objeto || Fecha Referencia || Quien lo incluyo || Descripcion de USO
			      ||      	|| 01/09/2023       || Mario Arita      || 
----------------------------------- MODIFICATION HISTORY ------------------------------------------------
Mario Arita    01/09/2023      Creación de procedimiento
**********************************************************************************************************/
BEGIN
  DECLARE v_fecha_inicio      DATE;
  DECLARE v_fecha_expiracion  DATE := NULL;
  DECLARE v_existe            INT(3);
  DECLARE v_existe_general    INT(24);
  DECLARE v_max_id            INT(24);
  DECLARE v_id_compania       INT(3);
  DECLARE v_error             VARCHAR(1000);
  DECLARE v_clave_insert      VARCHAR(1000);
  DECLARE v_expire_token      VARCHAR(1000);

  DECLARE v_nombre_compania   VARCHAR(3);
  SELECT nombre
  INTO v_nombre_compania
  FROM companias
  WHERE id_compania = 1;
END