module.exports = {
	themeConfig: {
		sidebar: {
			'/a/': [
				{
					title: "a",
          collapsable: true,
          children: [
						['', 'a desc'],
						['aa', 'aa desc'],
						{
							title: "a-c",
							collapsable: true,
							children: [
								['c/', 'a.c desc'],
								['c/copy', 'a.c.copy desc'],
							],
						}
					],
				},
			],
		},
		sidebarDepth: 1,
	},
}