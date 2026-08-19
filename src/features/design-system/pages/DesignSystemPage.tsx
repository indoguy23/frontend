import {
  ActionMenuPlayground,
  ActiveFiltersPlayground,
  AddressPlayground,
  AlertPlayground,
  AvatarPlayground,
  BadgePlayground,
  BreadcrumbPlayground,
  ButtonPlayground,
  CardPlayground,
  CartPlayground,
  CategoryCardPlayground,
  CheckboxPlayground,
  ConfirmationDialogPlayground,
  ConfirmDialogPlayground,
  ContentRailPlayground,
  CouponInputPlayground,
  DashboardLayoutPlayground,
  DataListPlayground,
  DataTablePlayground,
  DesignSystemHeader,
  DialogPlayground,
  DividerPlayground,
  DropdownMenuPlayground,
  FileUploadPlayground,
  FilterEmptyStatePlayground,
  FormPlayground,
  HeroBannerPlayground,
  InfoListPlayground,
  InputPlayground,
  LoaderPlayground,
  MetricPlayground,
  NavbarPlayground,
  NotificationItemPlayground,
  NotificationPanelPlayground,
  OrderCardPlayground,
  OrderItemPlayground,
  OrderStatusTimelinePlayground,
  OrderSummaryPlayground,
  PageHeaderPlayground,
  PaginationPlayground,
  PaymentMethodCardPlayground,
  ProductCardPlayground,
  ProductDetailsPlayground,
  ProductFiltersPlayground,
  ProductImageGalleryPlayground,
  ProductListingPlayground,
  ProgressStatusPlayground,
  PromoCardPlayground,
  QuantitySelectorPlayground,
  RadioGroupPlayground,
  RatingDisplayPlayground,
  RatingInputPlayground,
  ReviewFormPlayground,
  ReviewPlayground,
  SearchBarPlayground,
  SectionHeaderPlayground,
  SelectPlayground,
  SellerCardPlayground,
  SidebarPlayground,
  SkeletonPlayground,
  SortControlPlayground,
  StatCardPlayground,
  StatusBadgePlayground,
  StepIndicatorPlayground,
  StockBadgePlayground,
  SwitchPlayground,
  TabsPlayground,
  TextareaPlayground,
  TimelinePlayground,
  TooltipPlayground,
  UserSummaryPlayground,
  WishlistItemPlayground,
} from "../components";

import EmptyStatePlayground from "../components/EmptyStatePlayground";

const DesignSystemPage = () => {
  return (
    <main className="min-h-screen bg-background py-8 text-foreground sm:py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <DesignSystemHeader />

        {/* Core UI */}
        <ButtonPlayground />
        <CardPlayground />
        <BadgePlayground />
        <StatusBadgePlayground />
        <ProgressStatusPlayground />
        <AlertPlayground />
        <NotificationItemPlayground />
        <NotificationPanelPlayground />
        <EmptyStatePlayground />
        <FilterEmptyStatePlayground />
        <AvatarPlayground />
        <UserSummaryPlayground />
        <DividerPlayground />

        {/* Navigation & Overlay */}
        <BreadcrumbPlayground />
        <TabsPlayground />
        <DialogPlayground />
        <ConfirmationDialogPlayground />
        <ConfirmDialogPlayground />
        <TooltipPlayground />
        <DropdownMenuPlayground />
        <ActionMenuPlayground />

        {/* Feedback & States */}
        <LoaderPlayground />
        <SkeletonPlayground />

        {/* Form Components */}
        <InputPlayground />
        <TextareaPlayground />
        <SelectPlayground />
        <CheckboxPlayground />
        <RadioGroupPlayground />
        <SwitchPlayground />
        <FormPlayground />

        {/* Search & Data */}
        <SearchBarPlayground />
        <PaginationPlayground />
        <DataTablePlayground />

        {/* Marketplace Components */}
        <PageHeaderPlayground />
        <SectionHeaderPlayground />
        <InfoListPlayground />
        <DataListPlayground />
        <MetricPlayground />
        <HeroBannerPlayground />
        <PromoCardPlayground />
        <ContentRailPlayground />
        <ProductCardPlayground />
        <WishlistItemPlayground />
        <CategoryCardPlayground />
        <SellerCardPlayground />
        <ProductFiltersPlayground />
        <ActiveFiltersPlayground />
        <SortControlPlayground />
        <ProductListingPlayground />
        <FileUploadPlayground />
        <ProductImageGalleryPlayground />
        <RatingDisplayPlayground />
        <RatingInputPlayground />
        <ReviewFormPlayground />
        <ReviewPlayground />
        <StockBadgePlayground />
        <ProductDetailsPlayground />

        <QuantitySelectorPlayground />
        <AddressPlayground />
        <CartPlayground />
        <OrderSummaryPlayground />
        <CouponInputPlayground />
        <PaymentMethodCardPlayground />
        <StepIndicatorPlayground />
        <TimelinePlayground />
        <OrderItemPlayground />
        <OrderStatusTimelinePlayground />
        <OrderCardPlayground />

        {/* Application Navigation */}
        <NavbarPlayground />
        <SidebarPlayground />
        <DashboardLayoutPlayground />

        {/* Dashboard Components */}
        <StatCardPlayground />
      </div>
    </main>
  );
};

export default DesignSystemPage;
