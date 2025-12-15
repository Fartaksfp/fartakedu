// app/api/pdf/route.ts
import { NextResponse } from 'next/server';
import { Document, Page, Text, StyleSheet, Font, renderToStream } from '@react-pdf/renderer';
import path from 'path';

// ثبت فونت فارسی
Font.register({
  family: 'Noora',
  src: path.resolve('./public/fonts/Vazir-Medium-FD-WOL.ttf'),
});

const styles = StyleSheet.create({
  page: { padding: 30, textAlign: 'right', fontFamily: 'Noora' },
  text: { fontSize: 20 },
});

// Document PDF
const MyDocument = () => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.text}>سلام دنیا! PDF فارسی با App Router</Text>
    </Page>
  </Document>
);

export async function GET() {
  try {
    const stream = await renderToStream(<MyDocument />);

    // تبدیل stream به Uint8Array
    const chunks: Uint8Array[] = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
    }
    const pdfBuffer = Buffer.concat(chunks);

    // بازگرداندن PDF با هدر مناسب
    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="example.pdf"',
      },
    });
  } catch (err) {
    console.error(err);
    return new Response('خطا در ساخت PDF', { status: 500 });
  }
}
