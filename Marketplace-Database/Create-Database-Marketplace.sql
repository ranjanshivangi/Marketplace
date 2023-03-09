CREATE DATABASE [Marketplace]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Marketplace_DB', FILENAME = N'D:\Talent-Marketplace\Marketplace\Marketplace-Database\Marketplace-Data.mdf' , SIZE = 65536KB , FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Marketplace_LOG', FILENAME = N'D:\Talent-Marketplace\Marketplace\Marketplace-Database\Marketplace-Logs.ldf' , SIZE = 65536KB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [Marketplace] SET COMPATIBILITY_LEVEL = 150
GO
ALTER DATABASE [Marketplace] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Marketplace] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Marketplace] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Marketplace] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Marketplace] SET ARITHABORT OFF 
GO
ALTER DATABASE [Marketplace] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Marketplace] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Marketplace] SET AUTO_CREATE_STATISTICS ON(INCREMENTAL = OFF)
GO
ALTER DATABASE [Marketplace] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Marketplace] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Marketplace] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Marketplace] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Marketplace] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Marketplace] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Marketplace] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Marketplace] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Marketplace] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Marketplace] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Marketplace] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Marketplace] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Marketplace] SET  READ_WRITE 
GO
ALTER DATABASE [Marketplace] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Marketplace] SET  MULTI_USER 
GO
ALTER DATABASE [Marketplace] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Marketplace] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Marketplace] SET DELAYED_DURABILITY = DISABLED 
GO
USE [Marketplace]
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = Off;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = Primary;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = On;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = Primary;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = Off;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = Primary;
GO
USE [Marketplace]
GO
IF NOT EXISTS (SELECT name FROM sys.filegroups WHERE is_default=1 AND name = N'PRIMARY') ALTER DATABASE [Marketplace] MODIFY FILEGROUP [PRIMARY] DEFAULT
GO