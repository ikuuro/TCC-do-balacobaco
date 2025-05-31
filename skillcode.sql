-- node na porta 80

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 11/04/2025 às 22:37
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

CREATE DATABASE IF NOT EXISTS skillcode;
USE skillcode;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `login` varchar(255) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `pontuacao` int(11) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `telefone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Estrutura para tabela `amizades`
--
CREATE TABLE IF NOT EXISTS `amizades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` int(11) NOT NULL,
  `amigo_id` int(11) NOT NULL,
  `status` varchar(20) DEFAULT 'pendente',
  `data_solicitacao` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`usuario_id`) REFERENCES `usuario`(`id`),
  FOREIGN KEY (`amigo_id`) REFERENCES `usuario`(`id`),
  CONSTRAINT unique_amizade UNIQUE (`usuario_id`, `amigo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dados de exemplo para tabela `usuario`
INSERT INTO `usuario` (`email`, `login`, `nome`, `pontuacao`, `senha`, `telefone`) VALUES
('alice@email.com', 'alice', 'Alice Silva', 1200, 'senha123', '11999990001'),
('bob@email.com', 'bob', 'Bob Souza', 950, 'senha456', '11999990002'),
('carol@email.com', 'carol', 'Carol Lima', 800, 'senha789', '11999990003'),
('daniel@email.com', 'daniel', 'Daniel Costa', 1500, 'senha321', '11999990004'),
('eva@email.com', 'eva', 'Eva Rocha', 1100, 'senha654', '11999990005'),
('felipe@email.com', 'felipe', 'Felipe Alves', 700, 'senha987', '11999990006'),
('giovanna@email.com', 'giovanna', 'Giovanna Dias', 1300, 'senha147', '11999990007'),
('henrique@email.com', 'henrique', 'Henrique Melo', 900, 'senha258', '11999990008'),
('isabela@email.com', 'isabela', 'Isabela Pires', 1050, 'senha369', '11999990009'),
('joao@email.com', 'joao', 'João Martins', 1400, 'senha159', '11999990010');

-- Dados de exemplo para tabela `amizades`
INSERT INTO `amizades` (`usuario_id`, `amigo_id`, `status`) VALUES
(1, 2, 'aceito'),
(1, 3, 'aceito'),
(2, 4, 'pendente'),
(5, 1, 'aceito'),
(6, 7, 'pendente');

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;