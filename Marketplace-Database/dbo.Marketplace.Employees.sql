USE [Marketplace]
GO

/****** Object:  Table [dbo].[Employees]    Script Date: 09-02-2023 10:22:53 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Employees](
	[EmployeeId] [varchar](50) NOT NULL,
	[Designation] [varchar](50) NOT NULL,
	[CurrentProject] [varchar](100) NOT NULL,
	[CurrentManager] [varchar](100) NOT NULL,
	[Status] [bit] NOT NULL,
	[EmailId] [varchar](60) NOT NULL,
	[PhoneNumber] [nvarchar](14) NOT NULL,
	[Location] [varchar](50) NOT NULL,
	[About] [varchar](1500) NOT NULL,
	[ProfilePicture] [varchar](200) NOT NULL,
 CONSTRAINT [PK_Employees] PRIMARY KEY CLUSTERED 
(
	[EmployeeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


