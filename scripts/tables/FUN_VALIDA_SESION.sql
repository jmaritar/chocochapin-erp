CREATE FUNCTION u930882479_chocochapin.FUN_VALIDA_SESION(p_token VARCHAR(256)) 
RETURNS INT
/********************************************************************************************************
RELACIÓN CON EL SISTEMA
Tipo Objeto || Objeto || Fecha Referencia || Quien lo incluyo || Descripcion de USO
			      ||      	|| 01/09/2023       || Mario Arita      || 
----------------------------------- MODIFICATION HISTORY ------------------------------------------------
Mario Arita    01/09/2023      Creación de procedimiento
**********************************************************************************************************/
BEGIN

  DECLARE v_existe_sesion INT DEFAULT 0;

  -- Consulta para verificar si la sesión es válida según ciertas condiciones
  SELECT COUNT(1)
  INTO v_existe_sesion
  FROM SESIONES
  WHERE token = p_token AND fecha_login <= NOW() AND fecha_logout IS NULL AND fecha_expiracion > NOW();

  RETURN v_existe_sesion;

END;