USE [Marketplace]
GO

/****** Object:  Table [dbo].[RR]    Script Date: 1/19/2023 5:17:40 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[RR](
	[RRNumber] [varchar](12) NOT NULL,
	[Status] [varchar](6) NOT NULL,
	[Proficiency] [varchar](25) NOT NULL,
	[AccountName] [varchar](25) NOT NULL,
	[ProjectName] [varchar](50) NOT NULL,
	[BU] [varchar](20) NOT NULL,
	[Designation] [varchar](50) NOT NULL,
	[StartDate] [date] NOT NULL,
	[WorkLocation] [varchar](20) NOT NULL,
	[ClientInterview] [bit] NOT NULL,
	[MinimumExp] [int] NOT NULL,
	[TaggedEmployee] [varchar](50) NOT NULL,
	[Closing Remarks] [text] NOT NULL,
 CONSTRAINT [PK_RR] PRIMARY KEY CLUSTERED 
(
	[RRNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


