const qrku = "https://telegra.ph/file/a8ec3406cae4f18f87811.jpg"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrku, `
╭─「 Donasi • E-money 」
│ • Smartfren : 088293522266
│ • Axis : 083876760709
│ • Gopay : 0882932522266
│ • Dana : 083173593053
│ • Shopee Pay : 083179552930
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? wa.me/6288293522266
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *PANEL/RDP* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
