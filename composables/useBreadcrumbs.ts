export function useBreadcrumbs() {
  const route = useRoute();

  const getRouteLabel = (path: string): string => {
    return routeTranslations[path as keyof typeof routeTranslations] || path.charAt(0).toUpperCase() + path.slice(1);
  };

  const breadcrumbLinks = computed(() => {
    const pathSegments = route.path.split('/').filter(segment => segment);
    const breadcrumbItems = pathSegments.map((segment, index) => {
      const path = `${pathSegments.slice(0, index + 1).join('/')}`;
      return {
        label: getRouteLabel(path),
        to: path,
      };
    });

    if (breadcrumbItems.length > 1) {
      breadcrumbItems[breadcrumbItems.length - 1] = {
        label: getRouteLabel(`${pathSegments[pathSegments.length - 1]}`),
        to: route.path,
      };
    }

    breadcrumbItems.unshift({
      label: getRouteLabel('/'),
      to: '/',
    });

    return breadcrumbItems;
  });

  return {
    breadcrumbLinks,
  };
}
