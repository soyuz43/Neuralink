import { Icons } from './Icons';

interface SourceLinkProps {
  url: string;
  title: string;
  description?: string;
}

export default function SourceLink({ url, title, description }: SourceLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="source-link"
    >
      <Icons.ExternalLink className="source-link__icon" />
      <div>
        <span>{title}</span>
        {description && (
          <span className="block text-xs text-[var(--color-ink-muted)] mt-0.5 font-normal">
            {description}
          </span>
        )}
      </div>
    </a>
  );
}
