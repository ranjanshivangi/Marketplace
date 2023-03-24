USE [Marketplace]
GO

/****** Object:  Table [Demands].[RR]    Script Date: 23-03-2023 17:20:50 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Demands].[RR](
	[RRNumber] [nvarchar](15) NOT NULL,
	[Status] [tinyint] NOT NULL,
	[Proficiency] [nvarchar](25) NOT NULL,
	[AccountName] [nvarchar](25) NOT NULL,
	[ProjectName] [nvarchar](50) NOT NULL,
	[BU] [varchar](20) NOT NULL,
	[Designation] [nvarchar](50) NOT NULL,
	[StartDate] [date] NOT NULL,
	[WorkLocation] [nvarchar](20) NOT NULL,
	[ClientInterview] [bit] NOT NULL,
	[MinimumExp] [int] NOT NULL,
	[TaggedEmployee] [nvarchar](15) NOT NULL,
	[ClosingRemarks] [nvarchar](50) NOT NULL,
	[JDID] [int] NOT NULL,
 CONSTRAINT [PK_RR] PRIMARY KEY CLUSTERED 
(
	[RRNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [Demands].[RR]  WITH CHECK ADD  CONSTRAINT [FK_RR_JobDescriptions] FOREIGN KEY([JDID])
REFERENCES [Demands].[JobDescriptions] ([JDID])
GO

ALTER TABLE [Demands].[RR] CHECK CONSTRAINT [FK_RR_JobDescriptions]
GO


