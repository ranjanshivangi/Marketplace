USE [Marketplace]
GO

/****** Object:  Table [dbo].[Certifications]    Script Date: 10-02-2023 20:42:43 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Certifications](
	[CertificationID] [int] IDENTITY(1,1) NOT NULL,
	[CertificationsName] [nvarchar](max) NOT NULL,
	[CertificationsCompletionDate] [datetime2](7) NOT NULL,
	[CertificationsFrom] [nvarchar](max) NOT NULL,
	[CertificationsType] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Certifications] PRIMARY KEY CLUSTERED 
(
	[CertificationID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


