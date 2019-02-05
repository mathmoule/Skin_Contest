# WorkShops Equipe 44: Annonceur 1 - Skin Contest

Sont présentés ici les applications Front et Back développées dans le cadre des workshops 2019
par l'équipe 44.

## ContestServer
Ce répertoire contient les fichiers de L'API qui sert les routes qu'appelle l'application skin-contest.
Une documentation complète de cette API est disponible ici: https://documenter.getpostman.com/view/5594314/RztoM8AB#0c6463cb-2b6e-45df-a96c-dc22e8e68404

## Skin-Contest
Ce répertoire contient les fichiers de l'application côté client. Développée en React.js, elle est conçue pour être très réactive et fluide dans son utilisation.

## Installation
Téléchargez l'archive du repertoire Github et dézippez la dans un répertoire. Ouvrez un invite de commande et positionnez vous dans le répertoire "ContestServer".

```shell
cd C:\Users\Utilisateur\Documents\MonRepertoire\Skin_Contest\ContestServer
```
Installez les dépendances :
```shell
npm install
```
Une fois l'installation effectuée, ouvrez un nouvel invite de commande et positionnez vous dans le répertoire "skin-contest".
```shell
cd C:\Users\Utilisateur\Documents\MonRepertoire\Skin_Contest\skin-contest
```
Installez les dépendances :
```shell
npm install
```
Assurez vous d'avoir installé un envirronnement de base de données Mysql. Ouvrez l'invite de commande Mysql et lancez le script de création de base de donnée suivant:
```mysql
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `skincontest`
--

-- --------------------------------------------------------

--
-- Structure de la table `skin`
--

DROP TABLE IF EXISTS `skin`;
CREATE TABLE IF NOT EXISTS `skin` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `id_user` int(6) NOT NULL,
  `nom` varchar(60) NOT NULL,
  `gun` int(1) NOT NULL,
  `imageUrl` varchar(40) NOT NULL,
  `vote` int(6) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `skin`
--

INSERT INTO `skin` (`id`, `id_user`, `nom`, `gun`, `imageUrl`, `vote`) VALUES
(18, 6, 'Fire', 2, 'XWPzUYAhtvNp8B0Fgekm', 0),
(17, 2, 'California', 1, 'LAXU3rWEA0MQ2PbppI96', 0),
(16, 2, 'Neon Lord', 2, 'GV9NVRVzNqFB3VYFU1z0', 0);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(25) NOT NULL,
  `password` varchar(30) NOT NULL,
  `mail` tinytext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `pseudo`, `password`, `mail`) VALUES
(2, 'user', 'password', 'monmail@gmail.com'),
(6, 'user2', 'password2', 'random@gmail.com');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

```
### Paramétrage de la connection à la base de données

Ouvrez le fichiers "index.js" de "ContestServer" et éditez le dans un éditeur de code. Editez les paramètres suivants en fonctions de vos paramètres de connection.
```js
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'skincontest'
});
```
## Lancement des serveurs
Pour pouvoir utiliser l'application web, il est nécessaire de lancer le serveur Back (API node) et le serveur Front (React). Pour ce faire, positionnez vous en invite de commande dans le répertoire "ContestServer", et executez la commande suivante :
```bash
cd C:\Users\Utilisateur\Documents\MonRepertoire\Skin_Contest\ContestServer
npm start
```
Une fois le serveur Back-end démarré, ouvrez une nouvelle invite de commande et éxecutez les commandes suivantes:
```bash
cd C:\Users\Utilisateur\Documents\MonRepertoire\Skin_Contest\skin-contest
npm start
```
Une nouvelle fenêtre s'ouvre dans votre navigateur, à l'adresse "localhost:3000".
