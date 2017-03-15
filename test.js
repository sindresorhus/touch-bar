import test from 'ava';
import execa from 'execa';

if (process.env.CI) {
	test('ci', t => {
		t.pass();
	});
} else {
	test('main', async t => {
		await t.notThrows(execa('./cli.js'));
	});
}
