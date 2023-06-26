// SlashCommandBuilder という部品を discord.js からインポートしています。
// これにより、スラッシュコマンドを簡単に構築できます。
const { SlashCommandBuilder } = require('discord.js');
const messages = [
  'オハヨー',
  'コンニチハ',
  'タダイマ',
  'オヤスミ'
];

let randomMessage;

const random = ()=> {
  randomMessage = messages[Math.floor(Math.random() * messages.length)];
};

// 以下の形式にすることで、他のファイルでインポートして使用できるようになります。
module.exports = {
	data: new SlashCommandBuilder()
		.setName('hey')
		.setDescription('かわいいインコが知ってる言葉で返事してくれるよ！'),
	execute: async function(interaction) {
    random();
		await interaction.reply(randomMessage);
	},
};

// module.exportsの補足
// キー・バリューの連想配列のような形で構成されています。
//
// module.exports = {
//    キー: バリュー,
//    キー: バリュー,
// };
//