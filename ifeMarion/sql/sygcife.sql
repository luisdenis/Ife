-- phpMyAdmin SQL Dump
-- version 3.4.5
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 23-12-2012 a las 16:33:16
-- Versión del servidor: 5.5.16
-- Versión de PHP: 5.3.8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `sygcife`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cargo`
--

CREATE TABLE IF NOT EXISTS `cargo` (
  `id_cargo` int(11) NOT NULL AUTO_INCREMENT,
  `cargo` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id_cargo`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=4 ;

--
-- Volcado de datos para la tabla `cargo`
--

INSERT INTO `cargo` (`id_cargo`, `cargo`) VALUES
(1, 'Administrador'),
(2, 'Supervisor'),
(3, 'Tecnico de estacion');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `componente`
--

CREATE TABLE IF NOT EXISTS `componente` (
  `id_componente` int(11) NOT NULL AUTO_INCREMENT,
  `id_maquina` int(11) NOT NULL,
  `nombre_componente` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `cantidad` int(11) NOT NULL,
  PRIMARY KEY (`id_componente`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `componente`
--

INSERT INTO `componente` (`id_componente`, `id_maquina`, `nombre_componente`, `cantidad`) VALUES
(1, 1, 'Puerta de vidrio', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `componente_mantenimiento`
--

CREATE TABLE IF NOT EXISTS `componente_mantenimiento` (
  `id_c_m` int(11) NOT NULL AUTO_INCREMENT,
  `id_componente` int(11) NOT NULL,
  `id_mantenimiento` int(11) NOT NULL,
  `observacion` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `estado` int(11) NOT NULL,
  PRIMARY KEY (`id_c_m`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estacion`
--

CREATE TABLE IF NOT EXISTS `estacion` (
  `id_estacion` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id_estacion`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `estacion`
--

INSERT INTO `estacion` (`id_estacion`, `nombre`) VALUES
(1, 'Caracas'),
(2, 'Charallave Norte'),
(3, 'Charallave Sur'),
(4, 'Cua');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mantenimiento`
--

CREATE TABLE IF NOT EXISTS `mantenimiento` (
  `id_matenimiento` int(11) NOT NULL AUTO_INCREMENT,
  `observacion` longtext COLLATE utf8_spanish_ci NOT NULL,
  `id_maquina` int(11) NOT NULL,
  `fecha_mantenimiento` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_user` int(11) NOT NULL,
  PRIMARY KEY (`id_matenimiento`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=4 ;

--
-- Volcado de datos para la tabla `mantenimiento`
--

INSERT INTO `mantenimiento` (`id_matenimiento`, `observacion`, `id_maquina`, `fecha_mantenimiento`, `id_user`) VALUES
(3, 'Equipo en perfecto estado', 1, '2012-12-20 21:37:45', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `maquina`
--

CREATE TABLE IF NOT EXISTS `maquina` (
  `id_maquina` bigint(20) NOT NULL AUTO_INCREMENT,
  `nodo` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `logical_id` longtext COLLATE utf8_spanish_ci NOT NULL,
  `direccion_ip` longtext COLLATE utf8_spanish_ci NOT NULL,
  `localizador_rx` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `localizador` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `hora_ultimo_mensaje` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `estado` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `desaface_horario` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `id_estacion` int(11) NOT NULL,
  PRIMARY KEY (`id_maquina`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=16 ;

--
-- Volcado de datos para la tabla `maquina`
--

INSERT INTO `maquina` (`id_maquina`, `nodo`, `logical_id`, `direccion_ip`, `localizador_rx`, `localizador`, `hora_ultimo_mensaje`, `estado`, `desaface_horario`, `id_estacion`) VALUES
(1, 'CCS-01.12', '33654616516813651687461', '172.27.3.31', '54654654', '65465465', '2012-12-17 21:25:33', '1', '0:00:03', 1),
(2, 'CUA.01-02', '164651687465', '172.10.10.11', '654654', '6546874', '2012-12-17 21:25:41', '0', '00:03:00', 4),
(12, 'cua.01.02', '6546516541', '172.163.23.12', '3615651', '651651', '2012-12-20 06:36:57', '1', '00:03:00', 4),
(13, 'CUA.01.01', '63546513645', '172.46.23.23', '531351651', '35151351351', '2012-12-20 06:37:29', '2', '00:03:00', 4),
(14, 'CUA.01.02', '1351351', '172.163.1.1', '351351351', '351351351', '2012-12-20 06:38:06', '3', '00:03:00', 4),
(15, 'CUA.01.03', '9812791827981729', '172.10.10.10', '1287912987', '897129871298', '2012-12-20 18:17:17', '2', '00:03:00', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `menu`
--

CREATE TABLE IF NOT EXISTS `menu` (
  `id_menu` int(11) NOT NULL,
  `menu` int(11) NOT NULL,
  `nivel` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id_user` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id de usuario',
  `password` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `nombre` varchar(30) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `apellido` varchar(30) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_cargo` int(30) NOT NULL,
  `nombreUsuario` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `cedula` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `telefono` bigint(20) NOT NULL,
  `turno` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `activo` int(11) NOT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci COMMENT='Tabla para guardar usuario del sistema' AUTO_INCREMENT=37 ;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id_user`, `password`, `nombre`, `apellido`, `fecha`, `id_cargo`, `nombreUsuario`, `cedula`, `email`, `telefono`, `turno`, `activo`) VALUES
(1, '1234', 'Luis', 'Denis', '2012-11-26 17:39:10', 1, 'ldenis1', '17966173', 'denisvarela@gmail.com', 4264209995, 'diurno', 1),
(33, '1234', 'pruebaMarion', 'asdasd', '2012-12-18 08:35:47', 2, 'asdasd', '11', 'denisvarela1@gmail.com', 31651, 'Dirurno', 0),
(34, '1234', 'Ã©Ã³', 'deis', '2012-12-18 15:57:40', 0, '1', '1', 'denis10@gmail.com', 1, 'Diurno', 0),
(35, '123456', 'isaidy', 'torres', '2012-12-18 19:53:21', 3, 'itorres', '17966178', 'isaidytorres@gmail.com', 4264209994, 'Diurno', 1),
(36, '123456', 'Marion', 'Blanco', '2012-12-20 18:02:37', 3, 'mBlanco', '20364419', 'ideimar@ife.gov.ve', 12098810298, 'Diurno', 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
