USE [Marketplace]
GO

/****** Object:  Table [dbo].[Employees]    Script Date: 13-02-2023 10:26:57 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Employees](
	[EmployeeId] [varchar](12) NOT NULL,
	[Name] [varchar](100) NOT NULL,
	[Designation] [varchar](50) NOT NULL,
	[CurrentProject] [varchar](50) NOT NULL,
	[CurrentManager] [varchar](50) NOT NULL,
	[Status] [varchar](12) NOT NULL,
	[EmailId] [varchar](100) NOT NULL,
	[PhoneNumber] [bigint] NOT NULL,
	[Location] [varchar](20) NOT NULL,
	[About] [varchar](2000) NOT NULL,
	[ProfilePicture] [varchar](200) NOT NULL,
 CONSTRAINT [PK_Employees] PRIMARY KEY CLUSTERED 
(
	[EmployeeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


