import { formatDate, sleep, generateId, truncate, debounce, capitalize, isNonEmpty } from '../../src/lib/utils';

describe('formatDate', () => {
  it('formats a Date object', () => {
    const result = formatDate(new Date('2025-01-15'));
    expect(result).toContain('2025');
    expect(result).toContain('January');
  });

  it('formats a date string', () => {
    const result = formatDate('2024-12-25');
    expect(result).toContain('December');
  });
});

describe('sleep', () => {
  it('resolves after the specified delay', async () => {
    const start = Date.now();
    await sleep(50);
    const elapsed = Date.now() - start;
    expect(elapsed).toBeGreaterThanOrEqual(40);
  });
});

describe('generateId', () => {
  it('returns a non-empty string', () => {
    const id = generateId();
    expect(id.length).toBeGreaterThan(0);
  });

  it('generates unique IDs', () => {
    const ids = new Set(Array.from({ length: 100 }, () => generateId()));
    expect(ids.size).toBe(100);
  });
});

describe('truncate', () => {
  it('returns original string if within max length', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });

  it('truncates with ellipsis when too long', () => {
    const result = truncate('Hello World', 6);
    expect(result.length).toBeLessThanOrEqual(6);
    expect(result).toContain('\u2026');
  });

  it('handles exact length', () => {
    expect(truncate('abc', 3)).toBe('abc');
  });
});

describe('debounce', () => {
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => jest.useRealTimers());

  it('delays function execution', () => {
    const fn = jest.fn();
    const debounced = debounce(fn, 100);

    debounced();
    expect(fn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('resets timer on subsequent calls', () => {
    const fn = jest.fn();
    const debounced = debounce(fn, 100);

    debounced();
    jest.advanceTimersByTime(80);
    debounced();
    jest.advanceTimersByTime(80);
    expect(fn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(20);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});

describe('capitalize', () => {
  it('capitalizes first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('handles already capitalized string', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  it('handles single character', () => {
    expect(capitalize('a')).toBe('A');
  });

  it('handles empty string', () => {
    expect(capitalize('')).toBe('');
  });
});

describe('isNonEmpty', () => {
  it('returns true for non-empty string', () => {
    expect(isNonEmpty('hello')).toBe(true);
  });

  it('returns false for empty string', () => {
    expect(isNonEmpty('')).toBe(false);
  });

  it('returns false for whitespace-only string', () => {
    expect(isNonEmpty('   ')).toBe(false);
  });

  it('returns false for null', () => {
    expect(isNonEmpty(null)).toBe(false);
  });

  it('returns false for undefined', () => {
    expect(isNonEmpty(undefined)).toBe(false);
  });

  it('returns false for numbers', () => {
    expect(isNonEmpty(42)).toBe(false);
  });
});
