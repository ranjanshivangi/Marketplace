USE [Marketplace]
GO

/****** Object:  Table [dbo].[Employees]    Script Date: 08-02-2023 17:18:36 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Employees](
	[EmployeeId] [nvarchar](450) NOT NULL,
	[Designation] [nvarchar](max) NOT NULL,
	[CurrentProject] [nvarchar](max) NOT NULL,
	[CurrentManager] [nvarchar](max) NOT NULL,
	[Status] [nvarchar](max) NOT NULL,
	[EmailId] [nvarchar](max) NOT NULL,
	[PhoneNumber] [nvarchar](max) NOT NULL,
	[Location] [nvarchar](max) NOT NULL,
	[About] [nvarchar](max) NOT NULL,
	[ProfilePicture] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Employees] PRIMARY KEY CLUSTERED 
(
	[EmployeeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


