import { render, screen } from '@testing-library/react-native';
import { ThemedText } from '@/components/themed-text';

describe('ThemedText', () => {
  it('renders content with the expected combined class names', () => {
    render(
      <ThemedText type="title" className="text-orange-500">
        Welcome!
      </ThemedText>,
    );

    const text = screen.getByText('Welcome!');

    expect(text).toBeTruthy();
    expect(text.props.className).toContain('text-[32px]');
    expect(text.props.className).toContain('font-bold');
    expect(text.props.className).toContain('text-orange-500');
  });
});
