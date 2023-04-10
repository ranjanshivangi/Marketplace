USE [Marketplace]
GO

/****** Object:  Table [Master].[PastEmployments]    Script Date: 10-04-2023 13:08:28 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Master].[PastEmployments](
	[EmployeeId] [nvarchar](12) NOT NULL,
	[XEmployeerID] [int] NOT NULL,
	[XStartDesignation] [nvarchar](50) NOT NULL,
	[StartDate] [date] NOT NULL,
	[XLastDesignation] [nvarchar](50) NOT NULL,
	[EndDate] [date] NOT NULL,
	[Notes] [nvarchar](1500) NOT NULL,
	[XEMployeerCompanyName] [nvarchar](50) NULL,
 CONSTRAINT [PK_PastEmployments_1] PRIMARY KEY CLUSTERED 
(
	[EmployeeId] ASC,
	[XEmployeerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


