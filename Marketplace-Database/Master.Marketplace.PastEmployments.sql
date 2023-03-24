USE [Marketplace]
GO

/****** Object:  Table [Master].[PastEmployments]    Script Date: 23-03-2023 17:22:11 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Master].[PastEmployments](
	[EmployeeId] [nvarchar](12) NOT NULL,
	[XEmployeerID] [int] NOT NULL,
	[XEmployeerCompanyName] [nvarchar](50) NOT NULL,
	[XStartDesignation] [nvarchar](50) NOT NULL,
	[StartDate] [date] NOT NULL,
	[XLastDesignation] [nvarchar](50) NOT NULL,
	[EndDate] [date] NOT NULL,
	[Notes] [nvarchar](1500) NOT NULL,
 CONSTRAINT [PK_PastEmployments] PRIMARY KEY CLUSTERED 
(
	[EmployeeId] ASC,
	[XEmployeerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [Master].[PastEmployments]  WITH CHECK ADD  CONSTRAINT [FK_PastEmployments_Employees] FOREIGN KEY([EmployeeId])
REFERENCES [Master].[Employees] ([EmployeeId])
GO

ALTER TABLE [Master].[PastEmployments] CHECK CONSTRAINT [FK_PastEmployments_Employees]
GO


