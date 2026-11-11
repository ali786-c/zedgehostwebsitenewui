import { site } from '../../content/site';
import { Icon } from '../ui/Icon';

export function WhatsAppFloat() {
  return (
    <a
      className="zh-whatsapp"
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ZedgeHost on WhatsApp"
    >
      <Icon name="whatsapp" size={24} />
      <span>Chat with us</span>
    </a>
  );
}
