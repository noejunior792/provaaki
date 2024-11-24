import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TestViewer } from '@/components/test-viewer';

describe('TestViewer', () => {
  const mockProps = {
    imageUrl: 'test-image.jpg',
    isOpen: true,
    onClose: vi.fn(),
  };

  beforeEach(() => {
    mockProps.onClose.mockClear();
  });

  it('renders correctly when open', () => {
    render(<TestViewer {...mockProps} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('calls onClose when clicking outside', () => {
    render(<TestViewer {...mockProps} />);
    fireEvent.click(screen.getByRole('presentation'));
    expect(mockProps.onClose).toHaveBeenCalled();
  });

  it('does not render when closed', () => {
    render(<TestViewer {...mockProps} isOpen={false} />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});

describe('CreateTestDialog', () => {
  // Add tests for CreateTestDialog component
});