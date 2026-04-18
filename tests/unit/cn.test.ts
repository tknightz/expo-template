import { cn } from '@/lib/cn';

describe('cn', () => {
  it('merges duplicate tailwind classes predictably', () => {
    expect(cn('px-2', 'px-4', 'text-sm')).toBe('px-4 text-sm');
  });

  it('ignores falsy values while preserving valid classes', () => {
    expect(
      cn('font-semibold', false && 'hidden', null, undefined, 'text-lg'),
    ).toBe('font-semibold text-lg');
  });
});
