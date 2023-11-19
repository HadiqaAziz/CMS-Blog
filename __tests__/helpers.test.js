const {format_date} = require('../utils/helpers')

// creating a test for format_date() that takes Date() objects and return dates in MM/DD/YYYY
test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');
    
    expect(format_date(date)).toBe('3/20/2020');
});
