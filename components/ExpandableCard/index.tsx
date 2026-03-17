import React, { useState } from "react";
import {
  Card,
  HeaderSection,
  ContentSection,
  HeaderRow,
  TitleGroup,
  IconWrap,
  Title,
  EditButton,
  Badge,
  ChevronWrap,
  Divider,
} from "./styles";

const ChevronDown: React.FC = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M6 9l6 6 6-6"
      stroke="#36354c"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export interface ExpandableCardProps {
  /** Icon to display in the header */
  icon: React.ReactNode;
  /** Title text */
  title: string;
  /** Content shown when expanded */
  children?: React.ReactNode;
  /** Content shown when collapsed (summary preview) */
  summary?: React.ReactNode;
  /** Whether the card is expandable (shows chevron). Default true */
  expandable?: boolean;
  /** Initial expanded state. Default true */
  defaultExpanded?: boolean;
  /** Controlled expanded state (overrides defaultExpanded when set) */
  expanded?: boolean;
  /** Called when expanded state changes */
  onExpandedChange?: (expanded: boolean) => void;
  /** Edit button label */
  editLabel?: string;
  /** Called when Edit is clicked */
  onEdit?: () => void;
  /** Show Edit button only when expanded. Default false */
  showEditOnlyWhenExpanded?: boolean;
  /** Optional badge text (e.g. "2 coupons") */
  badge?: string;
  /** Accessibility label for the header */
  ariaLabel?: string;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({
  icon,
  title,
  children,
  summary,
  expandable = true,
  defaultExpanded = true,
  expanded: controlledExpanded,
  onExpandedChange,
  editLabel,
  onEdit,
  showEditOnlyWhenExpanded = false,
  badge,
  ariaLabel,
}) => {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  const isControlled = controlledExpanded !== undefined;
  const expanded = isControlled ? controlledExpanded : internalExpanded;

  const toggle = () => {
    if (!expandable) return;
    const next = !expanded;
    if (!isControlled) setInternalExpanded(next);
    onExpandedChange?.(next);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onEdit?.();
  };

  return (
    <Card>
      <HeaderSection>
        <HeaderRow
          role={expandable ? "button" : undefined}
          tabIndex={expandable ? 0 : undefined}
          aria-expanded={expandable ? expanded : undefined}
          onClick={expandable ? toggle : undefined}
          onKeyDown={expandable ? handleKeyDown : undefined}
          aria-label={ariaLabel ?? title}
          $clickable={expandable}
        >
          <TitleGroup>
            <IconWrap>{icon}</IconWrap>
            <Title>{title}</Title>
          </TitleGroup>
          {badge && <Badge>{badge}</Badge>}
          {editLabel && onEdit && (!showEditOnlyWhenExpanded || expanded) && (
            <EditButton
              type="button"
              onClick={handleEditClick}
              aria-label={`Edit ${title}`}
            >
              {editLabel}
            </EditButton>
          )}
          {expandable && (
            <ChevronWrap $open={expanded}>
              <ChevronDown />
            </ChevronWrap>
          )}
        </HeaderRow>
      </HeaderSection>

      {(expanded ? children : summary) && (
        <ContentSection>
          {expanded ? children : summary}
        </ContentSection>
      )}
    </Card>
  );
};

export default ExpandableCard;
