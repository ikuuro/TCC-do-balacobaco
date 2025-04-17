-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 07/04/2025 às 23:30
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `skillcode`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `amizades`
--

CREATE TABLE `amizades` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `amigo_id` int(11) DEFAULT NULL,
  `status` enum('aceito','pendente','bloqueado') DEFAULT NULL,
  `data_da_amizade` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `amizades`
--

INSERT INTO `amizades` (`id`, `usuario_id`, `amigo_id`, `status`, `data_da_amizade`) VALUES
(1, 1, 2, 'aceito', '2023-11-10 17:30:22'),
(2, 1, 3, 'aceito', '2023-11-11 12:15:10'),
(3, 2, 4, 'pendente', '2023-11-12 19:45:33'),
(4, 3, 1, 'aceito', '2023-11-13 14:20:05'),
(5, 4, 5, 'bloqueado', '2023-11-14 11:10:47'),
(6, 5, 6, 'aceito', '2023-11-15 22:30:18');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `login` varchar(30) NOT NULL,
  `senha_hash` varchar(250) NOT NULL,
  `telefone` varchar(11) DEFAULT NULL,
  `pontuacao` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `email`, `login`, `senha_hash`, `telefone`, `pontuacao`) VALUES
(1, 'Ana Silva', 'ana.silva@email.com', 'ana.silva', '$2a$12$L9QcW3UeJfYkHq3V2xTgE.9mZl1qKjXpN0dJ2rS8vYbW1cV3zD5Gt', '(11) 98765-', 1250),
(2, 'Carlos Oliveira', 'carlos.oliveira@empresa.com', 'carlos.oli', '$2a$12$hH7sS9KjF5dR.T2vQwXZr.3mZl1qKjXpN0dJ2rS8vYbW1cV3zD5Gt', '(21) 99876-', 780),
(3, 'Mariana Costa', 'mariana.c@universidade.edu', 'mari.costa', '$2a$12$pP8sR7TqW4eR.Y3uI2OZi.5mZl1qKjXpN0dJ2rS8vYbW1cV3zD5Gt', '(31) 99123-', 2100),
(4, 'Pedro Santos', 'pedro.santos@servico.com.br', 'pedro.s', '$2a$12$kK9jJ8H7G6fF5dS4a3Z2X.7mZl1qKjXpN0dJ2rS8vYbW1cV3zD5Gt', '(41) 99234-', 450),
(5, 'Juliana Pereira', 'ju.pereira@network.org', 'juh.pereira', '$2a$12$vV6bN5M4L3k2j1H0g9F8E.1mZl1qKjXpN0dJ2rS8vYbW1cV3zD5Gt', '(51) 99345-', 3150),
(6, 'Ricardo Almeida', 'ricardo.almeida@tech.io', 'ricardo.a', '$2a$12$sS5rT4Y3U2i1o0P9q8W7Q.3mZl1qKjXpN0dJ2rS8vYbW1cV3zD5Gt', '(61) 99456-', 890);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `amizades`
--
ALTER TABLE `amizades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `amigo_id` (`amigo_id`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `login` (`login`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `amizades`
--
ALTER TABLE `amizades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `amizades`
--
ALTER TABLE `amizades`
  ADD CONSTRAINT `amizades_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `amizades_ibfk_2` FOREIGN KEY (`amigo_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
