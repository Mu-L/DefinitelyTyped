declare global {
    interface Window {
        Telegram: Telegram;
    }
}

export type Color = string | false;

export interface Telegram {
    WebApp: WebApp;
}

export interface WebApp {
    /**
     * A string with raw data transferred to the Web App, convenient for
     * validating data. WARNING: Validate data from this field before using it
     * on the bot's server.
     */
    initData: string;
    /**
     * An object with input data transferred to the Web App. WARNING: Data from
     * this field should not be trusted. You should only use data from initData
     * on the bot's server and only after it has been validated.
     */
    initDataUnsafe: WebAppInitData;
    /**
     * The version of the Bot API available in the user's Telegram app.
     */
    version: string;
    /**
     * The name of the platform of the user's Telegram app.
     */
    platform: string;
    /**
     * The color scheme currently used in the Telegram app. Either “light” or
     * “dark”. Also available as the CSS variable var(--tg-color-scheme).
     */
    colorScheme: "light" | "dark";
    /**
     * An object containing the current theme settings used in the Telegram app.
     */
    themeParams: ThemeParams;
    /**
     *  **Bot API 8.0+**
     *
     *  True, if the Mini App is currently active.
     *  False, if the Mini App is minimized.
     */
    isActive: boolean;
    /**
     *  True if the Web App is expanded to the maximum available height.
     *  False, if the Web App occupies part of the screen and can be expanded to the
     *  full height using the expand() method.
     */
    isExpanded: boolean;
    /**
     * The current height of the visible area of the Web App.
     * Also available in CSS as the variable var(--tg-viewport-height).
     *
     * The application can display just the top part of the Web App, with its
     * lower part remaining outside the screen area. From this position, the
     * user can “pull” the Web App to its maximum height, while the bot can do
     * the same by calling the expand() method. As the position of the Web App
     * changes, the current height value of the visible area will be updated in
     * real time.
     *
     * Please note that the refresh rate of this value is not sufficient to
     * smoothly follow the lower border of the window. It should not be used to
     * pin interface elements to the bottom of the visible area. It's more
     * appropriate to use the value of the viewportStableHeight field for this
     * purpose.
     */
    viewportHeight: number;
    /**
     * The height of the visible area of the Web App in its last stable state.
     * Also available in CSS as a variable var(--tg-viewport-stable-height).
     *
     * The application can display just the top part of the Web App, with its
     * lower part remaining outside the screen area. From this position, the
     * user can “pull” the Web App to its maximum height, while the bot can do
     * the same by calling the expand() method. Unlike the value of
     * viewportHeight, the value of viewportStableHeight does not change as the
     * position of the Web App changes with user gestures or during animations.
     * The value of viewportStableHeight will be updated after all gestures and
     * animations are completed and the Web App reaches its final size.
     *
     * Note the event viewportChanged with the passed parameter
     * isStateStable=true, which will allow you to track when the stable state
     * of the height of the visible area changes.
     */
    viewportStableHeight: number;
    /**
     * Current header color in the #RRGGBB format.
     */
    headerColor: string;
    /**
     * Current background color in the #RRGGBB format.
     */
    backgroundColor: string;
    /**
     * Current bottom bar color in the #RRGGBB format.
     */
    bottomBarColor: string;
    /**
     * True, if the confirmation dialog is enabled while the user is trying to
     * close the Web App. False, if the confirmation dialog is disabled.
     */
    isClosingConfirmationEnabled: boolean;
    /**
     * True, if the Mini App is currently being displayed in fullscreen mode.
     */
    isFullscreen: boolean;
    /**
     * True, if the Mini App’s orientation is currently locked.
     * False, if orientation changes freely based on the device’s rotation.
     */
    isOrientationLocked: boolean;
    /**
     * An object representing the device's safe area insets,
     * accounting for system UI elements like notches or navigation bars.
     */
    safeAreaInset: SafeAreaInset;
    /**
     * An object representing the safe area for displaying content within the app,
     * free from overlapping Telegram UI elements.
     */
    contentSafeAreaInset: ContentSafeAreaInset;
    /**
     * An object for controlling the back button which can be displayed in the
     * header of the Web App in the Telegram interface.
     */
    BackButton: BackButton;
    /**
     * An object for controlling the main button, which is displayed at the
     * bottom of the Web App in the Telegram interface.
     */
    MainButton: BottomButton;
    /**
     * An object for controlling the secondary button,
     * which is displayed at the bottom of the Mini App in the Telegram interface.
     */
    SecondaryButton: BottomButton;
    /**
     * An object for controlling the Settings item in the context menu of the
     * Mini App in the Telegram interface.
     */
    SettingsButton: SettingsButton;
    /**
     * An object for controlling haptic feedback.
     */
    HapticFeedback: HapticFeedback;
    /**
     * An object for controlling cloud storage.
     */
    CloudStorage: CloudStorage;
    /**
     * An object for controlling biometrics on the device.
     */
    BiometricManager: BiometricManager;
    /**
     * An object for accessing device orientation data on the device.
     */
    Accelerometer: Accelerometer;
    /**
     * An object for accessing device orientation data on the device.
     */
    DeviceOrientation: DeviceOrientation;
    /**
     * An object for accessing gyroscope data on the device.
     */
    Gyroscope: Gyroscope;
    /**
     * An object for controlling location on the device.
     */
    LocationManager: LocationManager;
    /**
     * An object for storing and retrieving data from the device's local storage.
     */
    DeviceStorage: DeviceStorage;
    /**
     * An object for storing and retrieving data from the device's secure storage.
     */
    SecureStorage: SecureStorage;
    /**
     * Returns true if the user's app supports a version of the Bot API that is
     * equal to or higher than the version passed as the parameter.
     */
    isVersionAtLeast(version: string): boolean;
    /**
     * A method that sets the app header color in the `#RRGGBB` format.
     * You can also use keywords bg_color and secondary_bg_color.
     */
    setHeaderColor(color: "bg_color" | "secondary_bg_color" | (string & {})): void;
    /**
     * A method that sets the app background color in the `#RRGGBB` format
     * or you can use keywords bg_color, secondary_bg_color instead.
     */
    setBackgroundColor(color: "bg_color" | "secondary_bg_color" | "bottom_bar_bg_color" | (string & {})): void;
    /**
     * A method that sets the app's bottom bar color in the #RRGGBB format.
     * You can also use the keywords bg_color, secondary_bg_color and bottom_bar_bg_color.
     */
    setBottomBarColor(color: "bg_color" | "secondary_bg_color" | (string & {})): void;
    /**
     * A method that enables a confirmation dialog while the user is trying to
     * close the Web App.
     */
    enableClosingConfirmation(): void;
    /**
     * A method that disables the confirmation dialog while the user is trying
     * to close the Web App.
     */
    disableClosingConfirmation(): void;
    /**
     * A method that sets the app event handler. Check the list of available
     * events.
     */
    onEvent(eventType: "activated", eventHandler: ActivatedCallback): void;
    onEvent(eventType: "deactivated", eventHandler: DeactivatedCallback): void;
    onEvent(eventType: "themeChanged", eventHandler: ThemeChangedCallback): void;
    onEvent(eventType: "viewportChanged", eventHandler: ViewportChangedCallback): void;
    onEvent(eventType: "safeAreaChanged", eventHandler: SafeAreaChangedChangedCallback): void;
    onEvent(eventType: "contentSafeAreaChanged", eventHandler: ContentSafeAreaChangedCallback): void;
    onEvent(eventType: "mainButtonClicked", eventHandler: MainButtonClickedCallback): void;
    onEvent(eventType: "secondaryButtonClicked", eventHandler: SecondaryButtonClickedCallback): void;
    onEvent(eventType: "backButtonClicked", eventHandler: BackButtonClickedCallback): void;
    onEvent(eventType: "settingsButtonClicked", eventHandler: SettingsButtonClickedCallback): void;
    onEvent(eventType: "invoiceClosed", eventHandler: InvoiceClosedCallback): void;
    onEvent(eventType: "popupClosed", eventHandler: PopupClosedCallback): void;
    onEvent(eventType: "qrTextReceived", eventHandler: QrTextReceivedCallback): void;
    onEvent(eventType: "scanQrPopupClosed", eventHandler: ScanQrPopupClosedCallback): void;
    onEvent(eventType: "clipboardTextReceived", eventHandler: ClipboardTextReceivedCallback): void;
    onEvent(eventType: "writeAccessRequested", eventHandler: WriteAccessRequestedCallback): void;
    onEvent(eventType: "contactRequested", eventHandler: ContactRequestedCallback): void;
    onEvent(eventType: "biometricManagerUpdated", eventHandler: BiometricManagerUpdatedCallback): void;
    onEvent(eventType: "biometricAuthRequested", eventHandler: BiometricAuthRequestedCallback): void;
    onEvent(eventType: "biometricTokenUpdated", eventHandler: BiometricTokenUpdatedCallback): void;
    onEvent(eventType: "fullscreenChanged", eventHandler: FullscreenChangedCallback): void;
    onEvent(eventType: "fullscreenFailed", eventHandler: FullscreenFailedCallback): void;
    onEvent(eventType: "homeScreenAdded", eventHandler: HomeScreenAddedCallback): void;
    onEvent(eventType: "homeScreenChecked", eventHandler: HomeScreenCheckedCallback): void;
    onEvent(eventType: "accelerometerStarted", eventHandler: AccelerometerStartedCallback): void;
    onEvent(eventType: "accelerometerStopped", eventHandler: AccelerometerStoppedCallback): void;
    onEvent(eventType: "accelerometerChanged", eventHandler: AccelerometerChangedCallback): void;
    onEvent(eventType: "accelerometerFailed", eventHandler: AccelerometerFailedCallback): void;
    onEvent(eventType: "deviceOrientationStarted", eventHandler: DeviceOrientationStartedCallback): void;
    onEvent(eventType: "deviceOrientationStopped", eventHandler: DeviceOrientationStoppedCallback): void;
    onEvent(eventType: "deviceOrientationChanged", eventHandler: DeviceOrientationChangedCallback): void;
    onEvent(eventType: "deviceOrientationFailed", eventHandler: DeviceOrientationFailedCallback): void;
    onEvent(eventType: "gyroscopeStarted", eventHandler: GyroscopeStartedCallback): void;
    onEvent(eventType: "gyroscopeStopped", eventHandler: GyroscopeStoppedCallback): void;
    onEvent(eventType: "gyroscopeChanged", eventHandler: GyroscopeChangedCallback): void;
    onEvent(eventType: "gyroscopeFailed", eventHandler: GyroscopeFailedCallback): void;
    onEvent(eventType: "locationManagerUpdated", eventHandler: LocationManagerUpdatedCallback): void;
    onEvent(eventType: "locationRequested", eventHandler: LocationRequestedCallback): void;
    onEvent(eventType: "shareMessageSent", eventHandler: ShareMessageSentCallback): void;
    onEvent(eventType: "shareMessageFailed", eventHandler: ShareMessageFailedCallback): void;
    onEvent(eventType: "emojiStatusSet", eventHandler: EmojiStatusSetCallback): void;
    onEvent(eventType: "emojiStatusFailed", eventHandler: EmojiStatusFailedCallback): void;
    onEvent(eventType: "emojiStatusAccessRequested", eventHandler: EmojiStatusAccessRequestedCallback): void;
    onEvent(eventType: "fileDownloadRequested", eventHandler: FileDownloadRequestedCallback): void;

    /** A method that deletes a previously set event handler. */
    offEvent(eventType: "activated", eventHandler: ActivatedCallback): void;
    offEvent(eventType: "deactivated", eventHandler: DeactivatedCallback): void;
    offEvent(eventType: "themeChanged", eventHandler: ThemeChangedCallback): void;
    offEvent(eventType: "viewportChanged", eventHandler: ViewportChangedCallback): void;
    offEvent(eventType: "safeAreaChanged", eventHandler: SafeAreaChangedChangedCallback): void;
    offEvent(eventType: "contentSafeAreaChanged", eventHandler: ContentSafeAreaChangedCallback): void;
    offEvent(eventType: "mainButtonClicked", eventHandler: MainButtonClickedCallback): void;
    offEvent(eventType: "secondaryButtonClicked", eventHandler: SecondaryButtonClickedCallback): void;
    offEvent(eventType: "backButtonClicked", eventHandler: BackButtonClickedCallback): void;
    offEvent(eventType: "settingsButtonClicked", eventHandler: SettingsButtonClickedCallback): void;
    offEvent(eventType: "invoiceClosed", eventHandler: InvoiceClosedCallback): void;
    offEvent(eventType: "popupClosed", eventHandler: PopupClosedCallback): void;
    offEvent(eventType: "qrTextReceived", eventHandler: QrTextReceivedCallback): void;
    offEvent(eventType: "scanQrPopupClosed", eventHandler: ScanQrPopupClosedCallback): void;
    offEvent(eventType: "clipboardTextReceived", eventHandler: ClipboardTextReceivedCallback): void;
    offEvent(eventType: "writeAccessRequested", eventHandler: WriteAccessRequestedCallback): void;
    offEvent(eventType: "contactRequested", eventHandler: ContactRequestedCallback): void;
    offEvent(eventType: "biometricManagerUpdated", eventHandler: BiometricManagerUpdatedCallback): void;
    offEvent(eventType: "biometricAuthRequested", eventHandler: BiometricAuthRequestedCallback): void;
    offEvent(eventType: "biometricTokenUpdated", eventHandler: BiometricTokenUpdatedCallback): void;
    offEvent(eventType: "fullscreenChanged", eventHandler: FullscreenChangedCallback): void;
    offEvent(eventType: "fullscreenFailed", eventHandler: FullscreenFailedCallback): void;
    offEvent(eventType: "homeScreenAdded", eventHandler: HomeScreenAddedCallback): void;
    offEvent(eventType: "homeScreenChecked", eventHandler: HomeScreenCheckedCallback): void;
    offEvent(eventType: "accelerometerStarted", eventHandler: AccelerometerStartedCallback): void;
    offEvent(eventType: "accelerometerStopped", eventHandler: AccelerometerStoppedCallback): void;
    offEvent(eventType: "accelerometerChanged", eventHandler: AccelerometerChangedCallback): void;
    offEvent(eventType: "accelerometerFailed", eventHandler: AccelerometerFailedCallback): void;
    offEvent(eventType: "deviceOrientationStarted", eventHandler: DeviceOrientationStartedCallback): void;
    offEvent(eventType: "deviceOrientationStopped", eventHandler: DeviceOrientationStoppedCallback): void;
    offEvent(eventType: "deviceOrientationChanged", eventHandler: DeviceOrientationChangedCallback): void;
    offEvent(eventType: "deviceOrientationFailed", eventHandler: DeviceOrientationFailedCallback): void;
    offEvent(eventType: "gyroscopeStarted", eventHandler: GyroscopeStartedCallback): void;
    offEvent(eventType: "gyroscopeStopped", eventHandler: GyroscopeStoppedCallback): void;
    offEvent(eventType: "gyroscopeChanged", eventHandler: GyroscopeChangedCallback): void;
    offEvent(eventType: "gyroscopeFailed", eventHandler: GyroscopeFailedCallback): void;
    offEvent(eventType: "locationManagerUpdated", eventHandler: LocationManagerUpdatedCallback): void;
    offEvent(eventType: "locationRequested", eventHandler: LocationRequestedCallback): void;
    offEvent(eventType: "shareMessageSent", eventHandler: ShareMessageSentCallback): void;
    offEvent(eventType: "shareMessageFailed", eventHandler: ShareMessageFailedCallback): void;
    offEvent(eventType: "emojiStatusSet", eventHandler: EmojiStatusSetCallback): void;
    offEvent(eventType: "emojiStatusFailed", eventHandler: EmojiStatusFailedCallback): void;
    offEvent(eventType: "emojiStatusAccessRequested", eventHandler: EmojiStatusAccessRequestedCallback): void;
    offEvent(eventType: "fileDownloadRequested", eventHandler: FileDownloadRequestedCallback): void;

    /**
     * A method used to send data to the bot. When this method is called, a
     * service message is sent to the bot containing the data data of the length
     * up to 4096 bytes, and the Web App is closed. See the field web_app_data
     * in the class Message.
     *
     * This method is only available for Web Apps launched via a Keyboard
     * button.
     */
    sendData(data: string): void;
    /**
     * A method that inserts the bot's username and the specified inline query
     * in the current chat's input field. Query may be empty, in which case only
     * the bot's username will be inserted. If an optional choose_chat_types
     * parameter was passed, the client prompts the user to choose a specific
     * chat, then opens that chat and inserts the bot's username and the
     * specified inline query in the input field. You can specify which types of
     * chats the user will be able to choose from. It can be one or more of the
     * following types: users, bots, groups, channels.
     */
    switchInlineQuery(query: string, choose_chat_types?: Array<"users" | "bots" | "groups" | "channels">): void;
    /**
     * A method that opens a link in an external browser. The Web App will not
     * be closed. If the optional options parameter is passed with the field
     * @param try_instant_view the link will be opened in Instant View mode if
     * possible.
     *
     * Note that this method can be called only in response to user interaction
     * with the Web App interface (e.g. a click inside the Web App or on the
     * main button)
     */
    openLink(url: string, options?: { try_instant_view?: boolean }): void;
    /**
     * A method that opens a telegram link inside Telegram app. The Web App will
     * be closed.
     */
    openTelegramLink(url: string): void;
    /**
     * A method that opens an invoice using the link url. The Web App will
     *  receive the event invoiceClosed when the invoice is closed. If an
     *  optional callback parameter was passed, the callback function will be
     *  called and the invoice status will be passed as the first argument.
     */
    openInvoice(url: string, callback: (status: "paid" | "cancelled" | "failed" | "pending") => void): void;
    /**
     * A method that shows a native popup described by the params argument of
     * the type PopupParams. The Web App will receive the event popupClosed when
     * the popup is closed. If an optional callback parameter was passed, the
     * callback function will be called and the field id of the pressed button
     * will be passed as the first argument.
     */
    showPopup(params: PopupParams, callback?: (button_id: string) => void): void;
    /**
     * A method that shows message in a simple alert with a 'Close' button. If
     * an optional callback parameter was passed, the callback function will be
     * called when the popup is closed.
     */
    showAlert(message: string, callback?: () => void): void;
    /**
     * A method that shows message in a simple confirmation window with 'OK' and
     * 'Cancel' buttons. If an optional callback parameter was passed, the
     * callback function will be called when the popup is closed and the first
     * argument will be a boolean indicating whether the user pressed the 'OK'
     * button.
     */
    showConfirm(message: string, callback?: (ok: boolean) => void): void;
    /**
     * A method that shows a native popup for scanning a QR code described by
     * the params argument of the type ScanQrPopupParams. The Web App will
     * receive the event qrTextReceived every time the scanner catches a code
     * with text data. If an optional callback parameter was passed, the
     * callback function will be called and the text from the QR code will be
     * passed as the first argument. Returning true inside this callback
     * function causes the popup to be closed. Starting from **Bot API 7.7**,
     * the Mini App will receive the scanQrPopupClosed event if the user closes
     * the native popup for scanning a QR code.
     */
    showScanQrPopup(params: ScanQrPopupParams, callback?: (data: string) => void): void;
    /**
     * A method that closes the native popup for scanning a QR code opened with
     * the showScanQrPopup method. Run it if you received valid data in the
     * event qrTextReceived.
     */
    closeScanQrPopup(): void;
    /** A method that opens the native story editor with the media specified in
     * the media_url parameter as an HTTPS URL. An optional params argument of
     * the type StoryShareParams describes additional sharing settings. */
    shareToStory(media_url: string, params?: StoryShareParams): void;
    /**
     *  **Bot API 8.0+**
     *
     *  A method that opens a dialog allowing the user to share a message provided by the bot.
     *  If an optional callback parameter is provided,
     *  the callback function will be called with a boolean as the first argument,
     *  indicating whether the message was successfully sent.
     */
    shareMessage(msg_id: number, callback?: (success: boolean) => void): void;
    /**
     *  **Bot API 8.0+**
     *
     *  A method that opens a dialog allowing the user to set the specified custom emoji as their status.
     *  An optional params argument of type EmojiStatusParams specifies additional settings,such as duration.
     *  If an optional callback parameter is provided,
     *  the callback function will be called with a boolean as the first argument,
     *  indicating whether the status was set.
     *
     *  Note: this method opens a native dialog and cannot be used to set the emoji status without manual user interaction.
     *  For fully programmatic changes, you should instead use the Bot API method setUserEmojiStatus
     *  after obtaining authorization to do so via the Mini App method requestEmojiStatusAccess.
     */
    setEmojiStatus(custom_emoji_id: string, params?: EmojiStatusParams, callback?: (success: boolean) => void): void;
    /**
     *  **Bot API 8.0+**
     *
     *  A method that shows a native popup requesting permission for the bot to manage user's emoji status.
     *  If an optional callback parameter was passed,
     *  the callback function will be called when the popup is closed
     *  and the first argument will be a boolean indicating whether the user granted this access.
     */
    requestEmojiStatusAccess(callback?: (success: boolean) => void): void;
    /**
     *  **Bot API 8.0+**
     *
     *  A method that displays a native popup prompting the user to download a file
     *  specified by the params argument of type DownloadFileParams.
     *  If an optional callback parameter is provided,
     *  the callback function will be called when the popup is closed,
     *  with the first argument as a boolean indicating whether the user accepted the download request.
     */
    downloadFile(params: DownloadFileParams, callback?: (success: boolean) => void): void;
    /**
     * A method that requests text from the clipboard.
     * The Web App will receive the event clipboardTextReceived.
     * If an optional callback parameter was passed,
     * the callback function will be called and the text from the clipboard will be passed as the first argument.
     *
     * Note: this method can be called only for Web Apps launched from the
     * attachment menu and only in response to a user interaction with the Web
     * App interface (e.g. a click inside the Web App or on the main button).
     */
    readTextFromClipboard(callback?: (data: string | null) => void): void;
    /**
     * A method that shows a native popup requesting permission for the bot to
     * send messages to the user.
     *
     * @param callback If an optional callback parameter was passed, the
     * callback function will be called when the popup is closed and the first
     * argument will be a boolean indicating whether the user granted this
     * access.
     */
    requestWriteAccess(callback?: (success: boolean) => void): void;
    /**
     * A method that shows a native popup prompting the user for their phone
     * number.
     *
     * @param callback If an optional callback parameter was passed, the
     * callback function will be called when the popup is closed and the first
     * argument will be a boolean indicating whether the user shared its phone
     * number. The second argument, contingent upon success, will be an object
     * detailing the shared contact information or a cancellation response.
     */
    requestContact(callback?: (success: boolean, response: RequestContactResponse) => void): void;
    /**
     * A method that informs the Telegram app that the Web App is ready to be
     * displayed. It is recommended to call this method as early as possible, as
     * soon as all essential interface elements are loaded. Once this method is
     * called, the loading placeholder is hidden and the Web App is shown. If
     * the method is not called, the placeholder will be hidden only when the
     * page is fully loaded.
     */
    ready(): void;
    /**
     * A method that expands the Web App to the maximum available height. To
     * find out if the Web App is expanded to the maximum height, refer to the
     * value of the Telegram.WebApp.isExpanded parameter
     */
    expand(): void;
    /** A method that closes the Web App. */
    close(): void;
    /**
     * `True`, if vertical swipes to close or minimize the Mini App are enabled.
     * `False`, if vertical swipes to close or minimize the Mini App are
     * disabled. In any case, the user will still be able to minimize and close
     * the Mini App by swiping the Mini App's header.
     */
    isVerticalSwipesEnabled: boolean;
    /**
     * **Bot API 7.7+**
     * A method that enables vertical swipes to close or minimize the Mini App.
     * For user convenience, it is recommended to always enable swipes unless they conflict
     * with the Mini App's own gestures.
     */
    enableVerticalSwipes(): void;
    /**
     * **Bot API 7.7+**
     * A method that disables vertical swipes to close or minimize the Mini App.
     * This method is useful if your Mini App uses swipe gestures that may conflict
     * with the gestures for minimizing and closing the app.
     */
    disableVerticalSwipes(): void;
    /**
     * **Bot API 8.0+**
     *
     * A method that requests opening the Mini App in fullscreen mode.
     * Although the header is transparent in fullscreen mode,
     * it is recommended that the Mini App sets the header color using the setHeaderColor method.
     * This color helps determine a contrasting color for the status bar and other UI controls.
     */
    requestFullscreen(): void;
    /**
     * **Bot API 8.0+**
     *
     * A method that requests exiting fullscreen mode.
     */
    exitFullscreen(): void;
    /**
     * **Bot API 8.0+**
     *
     * A method that locks the Mini App’s orientation to its current mode (either portrait or landscape).
     * Once locked, the orientation remains fixed, regardless of device rotation.
     * This is useful if a stable orientation is needed during specific interactions.
     */
    lockOrientation(): void;
    /**
     * **Bot API 8.0+**
     *
     * A method that unlocks the Mini App’s orientation, allowing it to follow the device's rotation freely.
     * Use this to restore automatic orientation adjustments based on the device orientation.
     */
    unlockOrientation(): void;
    /**
     * **Bot API 8.0+**
     *
     * A method that prompts the user to add the Mini App to the home screen.
     * After successfully adding the icon, the homeScreenAdded event will be triggered if supported by the device.
     * Note that if the device cannot determine the installation status,
     * the event may not be received even if the icon has been added.
     */
    addToHomeScreen(): void;
    /**
     * **Bot API 8.0+**
     *
     * A method that checks if adding to the home screen is supported and if the Mini App has already been added.
     * If an optional callback parameter is provided,
     * the callback function will be called with a single argument status,
     * which is a string indicating the home screen status.
     */
    checkHomeScreenStatus(callback?: (status: "unsupported" | "unknown" | "added" | "missed") => void): void;
}

export type ActivatedCallback = () => void;
export type DeactivatedCallback = () => void;
export type ThemeChangedCallback = () => void;
export type ViewportChangedCallback = (eventData: { isStateStable: boolean }) => void;
export type SafeAreaChangedChangedCallback = () => void;
export type ContentSafeAreaChangedCallback = () => void;
export type MainButtonClickedCallback = () => void;
export type SecondaryButtonClickedCallback = () => void;
export type BackButtonClickedCallback = () => void;
export type SettingsButtonClickedCallback = () => void;
export type InvoiceClosedCallback = (eventData: {
    url: string;
    status: "paid" | "cancelled" | "failed" | "pending";
}) => void;
export type PopupClosedCallback = (eventData: { button_id: string | null }) => void;
export type QrTextReceivedCallback = (eventData: { data: string }) => void;
export type ScanQrPopupClosedCallback = () => void;
export type ClipboardTextReceivedCallback = (eventData: { data: string | null }) => void;
export type WriteAccessRequestedCallback = (eventData: {
    status: "allowed" | "cancelled";
}) => void;
export type ContactRequestedCallback = (eventData: RequestContactResponse) => void;
export type BiometricManagerUpdatedCallback = () => void;
export type BiometricAuthRequestedCallback = (eventData: {
    isAuthenticated: boolean;
    biometricToken?: string;
}) => void;
export type BiometricTokenUpdatedCallback = (eventData: { isUpdated: boolean }) => void;
export type FullscreenChangedCallback = () => void;
export type FullscreenFailedCallback = (eventData: {
    error: "UNSUPPORTED" | "ALREADY_FULLSCREEN";
}) => void;
export type HomeScreenAddedCallback = () => void;
export type HomeScreenCheckedCallback = (eventData: {
    status: "unsupported" | "unknown" | "added" | "missed";
}) => void;
export type AccelerometerStartedCallback = () => void;
export type AccelerometerStoppedCallback = () => void;
export type AccelerometerChangedCallback = () => void;
export type AccelerometerFailedCallback = (eventData: { error: "UNSUPPORTED" }) => void;
export type DeviceOrientationStartedCallback = () => void;
export type DeviceOrientationStoppedCallback = () => void;
export type DeviceOrientationChangedCallback = () => void;
export type DeviceOrientationFailedCallback = (eventData: { error: "UNSUPPORTED" }) => void;
export type GyroscopeStartedCallback = () => void;
export type GyroscopeStoppedCallback = () => void;
export type GyroscopeChangedCallback = () => void;
export type GyroscopeFailedCallback = (eventData: { error: "UNSUPPORTED" }) => void;
export type LocationManagerUpdatedCallback = () => void;
export type LocationRequestedCallback = (eventData: { locationData: LocationData }) => void;
export type ShareMessageSentCallback = () => void;
export type ShareMessageFailedCallback = (eventData: {
    error: "UNSUPPORTED" | "MESSAGE_EXPIRED" | "MESSAGE_SEND_FAILED" | "USER_DECLINED" | "UNKNOWN_ERROR";
}) => void;
export type EmojiStatusSetCallback = () => void;
export type EmojiStatusFailedCallback = (eventData: {
    error:
        | "UNSUPPORTED"
        | "SUGGESTED_EMOJI_INVALID"
        | "DURATION_INVALID"
        | "USER_DECLINED"
        | "SERVER_ERROR"
        | "UNKNOWN_ERROR";
}) => void;
export type EmojiStatusAccessRequestedCallback = (eventData: {
    status: "allowed" | "cancelled";
}) => void;
export type FileDownloadRequestedCallback = (eventData: {
    status: "downloading" | "cancelled";
}) => void;

/**
 * Web Apps can adjust the appearance of the interface to match the Telegram
 * user's app in real time. This object contains the user's current theme
 * settings:
 */
export interface ThemeParams {
    /**
     * Background color in the `#RRGGBB` format.
     * Also available as the CSS variable `var(--tg-theme-bg-color)`.
     */
    bg_color?: string;
    /**
     * Main text color in the `#RRGGBB` format.
     * Also available as the CSS variable `var(--tg-theme-text-color)`.
     */
    text_color?: string;
    /**
     * Hint text color in the `#RRGGBB` format.
     * Also available as the CSS variable `var(--tg-theme-hint-color)`.
     */
    hint_color?: string;
    /**
     * Link color in the `#RRGGBB` format.
     * Also available as the CSS variable `var(--tg-theme-link-color)`.
     */
    link_color?: string;
    /**
     * Button color in the `#RRGGBB` format.
     * Also available as the CSS variable `var(--tg-theme-button-color)`.
     */
    button_color?: string;
    /**
     * Button text color in the `#RRGGBB` format.
     * Also available as the CSS variable `var(--tg-theme-button-text-color)`.
     */
    button_text_color?: string;
    /**
     * **Bot API 6.1+**
     *
     * Secondary background color in the `#RRGGBB` format.
     * Also available as the CSS variable `var(--tg-theme-secondary-bg-color)`.
     */
    secondary_bg_color?: string;
    /**
     * **Bot API 7.0+**
     *
     * Header background color in the `#RRGGBB` format.
     * Also available as the CSS variable `var(--tg-theme-header-bg-color)`.
     */
    header_bg_color?: string;
    /**
     * **Bot API 7.10+**
     *
     * Bottom background color in the #RRGGBB format.
     * Also available as the CSS variable var(--tg-theme-bottom-bar-bg-color).
     */
    bottom_bar_bg_color?: string;
    /**
     * **Bot API 7.0+**
     *
     * Accent text color in the `#RRGGBB` format.
     * Also available as the CSS variable `var(--tg-theme-accent-text-color)`.
     */
    accent_text_color?: string;
    /**
     * **Bot API 7.0+**
     *
     * Background color for the section in the `#RRGGBB` format.
     * It is recommended to use this in conjunction with *secondary_bg_color*.
     * Also available as the CSS variable `var(--tg-theme-section-bg-color)`.
     */
    section_bg_color?: string;
    /**
     * **Bot API 7.0+**
     *
     * Header text color for the section in the `#RRGGBB` format.
     * Also available as the CSS variable `var(--tg-theme-section-header-text-color)`.
     */
    section_header_text_color?: `#${string}`;
    /**
     * **Bot API 7.6+**
     *
     * Section separator color in the `#RRGGBB` format.
     * Also available as the CSS variable `var(--tg-theme-section-separator-color)`.
     */
    section_separator_color?: string;
    /**
     * **Bot API 7.0+**
     *
     * Subtitle text color in the `#RRGGBB` format.
     *  Also available as the CSS variable `var(--tg-theme-subtitle-text-color)`.
     */
    subtitle_text_color?: string;
    /**
     * **Bot API 7.0+**
     *
     * Text color for destructive actions in the `#RRGGBB` format.
     * Also available as the CSS variable `var(--tg-theme-destructive-text-color)`.
     */
    destructive_text_color?: string;
}

/**
 * This object describes the native popup.
 */
export interface PopupParams {
    /**
     * The text to be displayed in the popup title, 0-64 characters.
     */
    title?: string;
    /**
     * The message to be displayed in the body of the popup, 1-256 characters.
     */
    message: string;
    /**
     * List of buttons to be displayed in the popup, 1-3 buttons. Set to
     * [{“type”:“close”}] by default.
     */
    buttons?: PopupButton[];
}

/**
 * This object describes the native popup button.
 */
export type PopupButton =
    & {
        /**
         * Identifier of the button, 0-64 characters. Set to empty string by default.
         * If the button is pressed, its id is returned in the callback and the popupClosed event.
         */
        id?: string;
        /**
         * Type of the button. Set to default by default. Can be one of these
         * values:
         * - `default`, a button with the default style,
         * - `ok`, a button with the localized text “OK”,
         * - `close`, a button with the localized text “Close”,
         * - `cancel`, a button with the localized text “Cancel”,
         * - `destructive`, a button with a style that indicates a destructive action (e.g. “Remove”, “Delete”, etc.).
         */
        type?: "default" | "ok" | "close" | "cancel" | "destructive";
        /**
         * The text to be displayed on the button, 0-64 characters. Required if
         * type is default or destructive. Irrelevant for other types.
         */
        text?: string;
    }
    & (
        | {
            type: "default" | "destructive";
            text: string;
        }
        | {
            type: "ok" | "close" | "cancel";
            text?: string;
        }
    );

/**
 * This object controls the back button, which can be displayed in the header of
 * the Web App in the Telegram interface.
 */
export interface BackButton {
    /**
     * Shows whether the button is visible. Set to false by default.
     */
    isVisible: boolean;
    /**
     * A method that sets the button press event handler. An alias for
     * Telegram.WebApp.onEvent('backButtonClicked', callback)
     */
    onClick(callback: () => void): BackButton;
    /**
     *  A method that removes the button press event handler. An alias for
     *  Telegram.WebApp.offEvent('backButtonClicked', callback)
     */
    offClick(callback: () => void): BackButton;
    /**
     * A method to make the button active and visible.
     */
    show(): void;
    /**
     * A method to hide the button.
     */
    hide(): void;
}

/**
 * This object controls the main button, which is displayed at the bottom of the
 * Web App in the Telegram interface.
 */
export interface BottomButton {
    /** Current button text. Set to CONTINUE by default. */
    text: string;
    /** Current button color. Set to themeParams.button_color by default. */
    color: string;
    /**
     * Current button text color. Set to themeParams.button_text_color by
     * default.
     */
    textColor: string;
    /** Shows whether the button is visible. Set to false by default. */
    isVisible: boolean;
    /** Shows whether the button is active. Set to true by default. */
    isActive: boolean;
    /** Shows whether the button has a shine effect. Set to false by default. */
    hasShineEffect: boolean;
    /**
     * Position of the secondary button. Not defined for the main button.
     * It applies only if both the main and secondary buttons are visible. Set to left by default.
     * Supported values:
     *  - left, displayed to the left of the main button,
     *  - right, displayed to the right of the main button,
     *  - top, displayed above the main button,
     *  - bottom, displayed below the main button.
     */
    position?: "left" | "right" | "top" | "bottom";
    /** Readonly. Shows whether the button is displaying a loading indicator. */
    isProgressVisible: boolean;
    /** A method to set the button text. */
    setText(text: string): BottomButton;
    /**
     * A method that sets the button press event handler. An alias for
     * Telegram.WebApp.onEvent('mainButtonClicked', callback)
     */
    onClick(callback: () => void): BottomButton;
    /** A method that deletes a previously set handler */
    offClick(callback: () => void): BottomButton;
    /**
     * A method to make the button visible. Note that opening the Web App from
     * the attachment menu hides the main button until the user interacts with
     * the Web App interface.
     */
    show(): BottomButton;
    /** A method to hide the button. */
    hide(): BottomButton;
    /** A method to enable the button. */
    enable(): BottomButton;
    /** A method to disable the button. */
    disable(): BottomButton;
    /**
     * A method to show a loading indicator on the button. It is recommended to
     * display loading progress if the action tied to the button may take a long
     * time. By default, the button is disabled while the action is in progress.
     * If the parameter leaveActive=true is passed, the button remains enabled.
     */
    showProgress(leaveActive?: boolean): BottomButton;
    /** A method to hide the loading indicator. */
    hideProgress(): BottomButton;
    /**
     * A method to set the button parameters. The params parameter is an object
     * containing one or several fields that need to be changed:
     * - text - button text;
     * - color - button color;
     * - text_color - button text color;
     * - is_active - enable the button;
     * - is_visible - show the button.
     */
    setParams(params: MainButtonParams): BottomButton;
}

export interface MainButtonParams {
    /** button text */
    text?: string;
    /** button color */
    color?: Color;
    /** button text color */
    text_color?: Color;
    /** enable shine effect */
    has_shine_effect?: boolean;
    /** position of the secondary button */
    position?: "left" | "right" | "top" | "bottom";
    /** enable the button */
    is_active?: boolean;
    /** show the button */
    is_visible?: boolean;
}

/**
 * This object controls the Settings item in the context menu of the Mini App in
 * the Telegram interface.
 */
export interface SettingsButton {
    /**
     * Shows whether the context menu item is visible. Set to false by default.
     */
    isVisible: boolean;
    /**
     * **Bot API 7.0+**
     *
     * A method that sets the press event handler for the Settings item in the context menu.
     * An alias for `Telegram.WebApp.onEvent('settingsButtonClicked', callback)`
     */
    onClick(callback: () => void): SettingsButton;
    /**
     * **Bot API 7.0+**
     *
     * A method that removes the press event handler from the Settings item in the context menu.
     * An alias for `Telegram.WebApp.offEvent('settingsButtonClicked', callback)`
     */
    offClick(callback: () => void): SettingsButton;
    /**
     * **Bot API 7.0+**
     *
     * A method to make the Settings item in the context menu visible.
     */
    show(): SettingsButton;
    /**
     * **Bot API 7.0+**
     *
     * A method to hide the Settings item in the context menu.
     */
    hide(): SettingsButton;
}

/**
 *  This object controls haptic feedback.
 */
export interface HapticFeedback {
    /**
     * A method tells that an impact occurred. The Telegram app may play the
     * appropriate haptics based on style value passed. Style can be one of
     * these values:
     * - light, indicates a collision between small or lightweight UI objects,
     * - medium, indicates a collision between medium-sized or medium-weight UI
     *   objects,
     * - heavy, indicates a collision between large or heavyweight UI objects,
     * - rigid, indicates a collision between hard or inflexible UI objects,
     * - soft, indicates a collision between soft or flexible UI objects.
     */
    impactOccurred(style: "light" | "medium" | "heavy" | "rigid" | "soft"): () => void;
    /**
     * A method tells that a task or action has succeeded, failed, or produced a
     * warning. The Telegram app may play the appropriate haptics based on type
     * value passed. Type can be one of these values:
     * - error, indicates that a task or action has failed,
     * - success, indicates that a task or action has completed successfully,
     * - warning, indicates that a task or action produced a warning.
     */
    notificationOccurred(type: "error" | "success" | "warning"): () => void;
    /**
     * A method tells that the user has changed a selection. The Telegram app
     * may play the appropriate haptics.
     *
     * Do not use this feedback when the user makes or confirms a selection; use
     * it only when the selection changes.
     */
    selectionChanged(): void;
}

export interface CloudStorage {
    /**
     * A method that stores a value in the cloud storage using the specified
     * key.
     *
     * @param key The key should contain 1-128 characters, only A-Z, a-z, 0-9, _
     * and - are allowed.
     * @param value The value should contain 0-4096 characters. You can store up
     * to 1024 keys in the cloud storage.
     * @param callback If an optional callback parameter was passed, the
     * callback function will be called. In case of an error, the first argument
     * will contain the error. In case of success, the first argument will be
     * null and the second argument will be a boolean indicating whether the
     * value was stored.
     */
    setItem(key: string, value: string, callback?: CloudStorageSetItemCallback): CloudStorage;
    /**
     * A method that receives a value from the cloud storage using the specified
     * key.
     *
     * @param key The key should contain 1-128 characters, only A-Z, a-z, 0-9, _
     * and - are allowed.
     * @param callback In case of an error, the callback function will be called
     * and the first argument will contain the error. In case of success, the
     * first argument will be null and the value will be passed as the second
     * argument.
     */
    getItem(key: string, callback?: CloudStorageGetItemCallback): CloudStorage;
    /**
     * A method that receives values from the cloud storage using the specified
     * keys.
     *
     * @param key The keys should contain 1-128 characters, only A-Z, a-z, 0-9,
     * _ and - are allowed.
     * @param callback In case of an error, the callback? function will be
     * called and the first argument will contain the error. In case of success,
     * the first argument will be null and the values will be passed as the
     * second argument.
     */
    getItems(keys: string[], callback?: CloudStorageGetItemsCallback): CloudStorage;
    /**
     * A method that removes a value from the cloud storage using the specified
     * key.
     *
     * @param key The key should contain 1-128 characters, only A-Z, a-z, 0-9, _
     * and - are allowed.
     * @param callback If an optional callback parameter was passed, the
     * callback function will be called. In case of an error, the first argument
     * will contain the error. In case of success, the first argument will be
     * null and the second argument will be a boolean indicating whether the
     * value was removed.
     */
    removeItem(key: string, callback?: CloudStorageRemoveItemCallback): CloudStorage;
    /**
     * A method that removes values from the cloud storage using the specified
     * keys.
     *
     * @param key The keys should contain 1-128 characters, only A-Z, a-z, 0-9,
     * _ and - are allowed.
     * @param callback If an optional callback parameter was passed, the
     * callback function will be called. In case of an error, the first argument
     * will contain the error. In case of success, the first argument will be
     * null and the second argument will be a boolean indicating whether the
     * values were removed.
     */
    removeItems(keys: string[], callback?: CloudStorageRemoveItemsCallback): CloudStorage;
    /**
     * A method that receives the list of all keys stored in the cloud storage.
     *
     * @param callback In case of an error, the callback function will be called
     * and the first argument will contain the error. In case of success, the
     * first argument will be null and the list of keys will be passed as the
     * second argument.
     */
    getKeys(callback?: CloudStorageGetKeysCallback): CloudStorage;
}

export type CloudStorageSetItemCallback = (error: string | null, success: null | true) => void;
export type CloudStorageGetItemCallback = (error: string | null, value: null | string) => void;
export type CloudStorageGetItemsCallback = (error: string | null, values: null | Record<string, string>) => void;
export type CloudStorageRemoveItemCallback = (error: string | null, success: null | true) => void;
export type CloudStorageRemoveItemsCallback = (error: string | null, success: null | true) => void;
export type CloudStorageGetKeysCallback = (error: string | null, keys: null | string[]) => void;

/**
 * This object controls biometrics on the device. Before the first use of this
 * object, it needs to be initialized using the init method.
 */
export interface BiometricManager {
    /**
     * Shows whether biometrics object is initialized.
     */
    isInited: boolean;
    /**
     * Shows whether biometrics is available on the current device.
     */
    isBiometricAvailable: boolean;
    /**
     * The type of biometrics currently available on the device. Can be one of
     * these values:
     * - finger, fingerprint-based biometrics,
     * - face, face-based biometrics,
     * - unknown, biometrics of an unknown type.
     */
    biometricType: "finger" | "face" | "unkown";
    /**
     * Shows whether permission to use biometrics has been requested.
     */
    isAccessRequested: boolean;
    /**
     * Shows whether permission to use biometrics has been granted.
     */
    isAccessGranted: boolean;
    /**
     * Shows whether the token is saved in secure storage on the device.
     */
    isBiometricTokenSaved: boolean;
    /**
     * A unique device identifier that can be used to match the token to the
     * device.
     */
    deviceId: string;
    /**
     * A method that initializes the BiometricManager object. It should be
     * called before the object's first use. If an optional callback parameter
     * was passed, the callback function will be called when the object is
     * initialized.
     */
    init: (callback?: () => void) => BiometricManager;
    /**
     * A method that requests permission to use biometrics according to the
     * params argument of type BiometricRequestAccessParams. If an optional
     * callback parameter was passed, the callback function will be called and
     * the first argument will be a boolean indicating whether the user granted
     * access.
     */
    requestAccess: (
        params: BiometricRequestAccessParams,
        callback?: BiometricRequestAccessCallback,
    ) => BiometricManager;
    /**
     * A method that authenticates the user using biometrics according to the
     * params argument of type BiometricAuthenticateParams. If an optional
     * callback parameter was passed, the callback function will be called and
     * the first argument will be a boolean indicating whether the user
     * authenticated successfully.
     *
     * If so, the second argument will be a biometric token.
     */
    authenticate: (params: BiometricAuthenticateParams, callback?: BiometricAuthenticateCallback) => BiometricManager;
    /**
     * A method that updates the biometric token in secure storage on the device.
     * To remove the token, pass an empty string.
     * If an optional callback parameter was passed,
     * the callback function will be called
     * and the first argument will be a boolean indicating whether the token was updated.
     */
    updateBiometricToken: (token: string, callback?: (success: boolean) => void) => BiometricManager;
    /**
     * A method that opens the biometric access settings for bots. Useful when
     * you need to request biometrics access to users who haven't granted it
     * yet.
     *
     * Note that this method can be called only in response to user interaction
     * with the Mini App interface (e.g. a click inside the Mini App or on the
     * main button)
     */
    openSettings: () => BiometricManager;
}

export type BiometricRequestAccessCallback = (isAccessGranted: boolean) => void;
export type BiometricAuthenticateCallback = (isAuthenticated: boolean, biometricToken?: string) => void;

/**
 * This object describes the native popup for requesting permission to use
 * biometrics.
 */
export interface BiometricRequestAccessParams {
    /**
     * The text to be displayed to a user in the popup describing why the bot
     * needs access to biometrics, 0-128 characters.
     */
    reason?: string;
}

/**
 * This object describes the native popup for authenticating the user using
 * biometrics.
 */
export interface BiometricAuthenticateParams {
    /**
     * The text to be displayed to a user in the popup describing why you are
     * asking them to authenticate and what action you will be taking based on
     * that authentication, 0-128 characters.
     */
    reason?: string;
}

/**
 * This object contains data that is transferred to the Web App when it is
 * opened. It is empty if the Web App was launched from a keyboard button.
 */
export interface WebAppInitData {
    /**
     * A unique identifier for the Web App session, required for sending
     * messages via the answerWebAppQuery method.
     */
    query_id?: string;
    /** An object containing data about the current user. */
    user?: WebAppUser;
    /**
     * An object containing data about the chat partner of the current user in
     * the chat where the bot was launched via the attachment menu. Returned
     * only for Web Apps launched via the attachment menu.
     */
    receiver?: WebAppUser;
    /**
     * An object containing data about the chat where the bot was launched via
     * the attachment menu. Returned for supergroups, channels and group chats –
     * only for Web Apps launched via the attachment menu.
     */
    chat?: WebAppChat;
    /**
     * Type of the chat from which the Web App was opened. Can be either
     * “sender” for a private chat with the user opening the link, “private”,
     * “group”, “supergroup”, or “channel”. Returned only for Web Apps launched
     * from direct links.
     */
    chat_type?: "sender" | "private" | "group" | "supergroup" | "channel";
    /**
     * Global identifier, uniquely corresponding to the chat from which the Web
     * App was opened. Returned only for Web Apps launched from a direct link.
     */
    chat_instance?: string;
    /**
     * The value of the startattach parameter, passed via link. Only returned
     * for Web Apps when launched from the attachment menu via link. The value
     * of the start_param parameter will also be passed in the GET-parameter
     * tgWebAppStartParam, so the Web App can load the correct interface right
     * away.
     */
    start_param?: string;
    /**
     * Time in seconds, after which a message can be sent via the
     * answerWebAppQuery method.
     */
    can_send_after?: number;
    /** Unix time when the form was opened. */
    auth_date: number;
    /**
     * A hash of all passed parameters, which the bot server can use to check
     * their validity.
     */
    hash: string;
}

/** This object contains the data of the Web App user. */
export interface WebAppUser {
    /**
     * A unique identifier for the user or bot. This number may have more than
     * 32 significant bits and some programming languages may have
     * difficulty/silent defects in interpreting it. It has at most 52
     * significant bits, so a 64-bit integer or a double-precision float type is
     * safe for storing this identifier.
     */
    id: number;
    /** True, if this user is a bot. Returns in the receiver field only. */
    is_bot?: boolean;
    /** First name of the user or bot. */
    first_name: string;
    /** Last name of the user or bot. */
    last_name?: string;
    /** Username of the user or bot. */
    username?: string;
    /** IETF language tag of the user's language. Returns in user field only. */
    language_code?: string;
    /** True, if this user is a Telegram Premium user. */
    is_premium?: true;
    /** True, if this user added the bot to the attachment menu. */
    added_to_attachment_menu?: true;
    /** True, if this user allowed the bot to message them. */
    allows_write_to_pm?: true;
    /**
     * URL of the user’s profile photo. The photo can be in .jpeg or .svg
     * formats. Only returned for Web Apps launched from the attachment menu.
     */
    photo_url?: string;
}

/**
 * This object represents a chat.
 */
export interface WebAppChat {
    /**
     * Unique identifier for this chat. This number may have more than 32
     * significant bits and some programming languages may have
     * difficulty/silent defects in interpreting it. But it has at most 52
     * significant bits, so a signed 64-bit integer or double-precision float
     * type are safe for storing this identifier.
     */
    id: number;
    /**
     * Type of chat, can be either “group”, “supergroup” or “channel”
     */
    type: "group" | "supergroup" | "channel";
    /**
     * Title of the chat
     */
    title: string;
    /**
     * Username of the chat
     */
    username?: string;
    /**
     * URL of the chat’s photo. The photo can be in .jpeg or .svg formats. Only
     * returned for Web Apps launched from the attachment menu.
     */
    photo_url?: string;
}
/**
 * This object describes the native popup for scanning QR codes.
 */
export interface ScanQrPopupParams {
    /**
     * The text to be displayed under the 'Scan QR' heading, 0-64 characters.
     */
    text?: string;
}

/**
 * This object describes contact information shared when requestContact was
 * approved by the user.
 */
export interface RequestContactResponseSent {
    /** Status 'sent' indicates that contact information has been shared. */
    status: "sent";
    /** A status message or result as a string. */
    response: string;
    /** Contains sensitive information shared upon user consent. WARNING: Data
     * from this field should not be trusted. You should only use data from
     * `response` on the bot's server and only after it has been validated. */
    responseUnsafe: {
        /** Authorization date for sharing contact information. */
        auth_date: string;
        /** Object holding user's contact details. */
        contact: {
            /** User's first name. */
            first_name: string;
            /** Optional. User's last name. */
            last_name?: string;
            /** User's phone number. */
            phone_number: string;
            /** Unique identifier of the user. */
            user_id: number;
        };
        /** Hash to verify data authenticity. */
        hash: string;
    };
}

/**
 * This object only contains a status to indicate the cancellation.
 */
export interface RequestContactResponseCancelled {
    /** Status 'cancelled', indicates that user cancelled the contact share
     * request. */
    status: "cancelled";
}

export type RequestContactResponse = RequestContactResponseSent | RequestContactResponseCancelled;

/** This object describes additional sharing settings for the native story
 * editor. */
export interface StoryShareParams {
    /** The caption to be added to the media, 0-200 characters for regular users
     * and 0-2048 characters for premium subscribers. */
    text?: string;
    /** An object that describes a widget link to be included in the story. Note
     * that only premium subscribers can post stories with links. */
    widget_link?: StoryWidgetLink;
}

/** This object describes a widget link to be included in the story. */
export interface StoryWidgetLink {
    /** The URL to be included in the story. */
    url: string;
    /** The name to be displayed for the widget link, 0-48 characters. */
    name?: string;
}

export interface LocationData {
    /**
     * Latitude in degrees.
     */
    latitude: number;
    /**
     * Longitude in degrees.
     */
    longitude: number;
    /**
     * Altitude above sea level in meters. null if altitude data is not available on the device.
     */
    altitude: number | null;
    /**
     * The direction the device is moving in degrees (0 = North, 90 = East, 180 = South, 270 = West).
     * null if course data is not available on the device.
     */
    course: number | null;
    /**
     * The speed of the device in m/s. null if speed data is not available on the device.
     */
    speed: number | null;
    /**
     * Accuracy of the latitude and longitude values in meters.
     * null if horizontal accuracy data is not available on the device.
     */
    horizontal_accuracy: number | null;
    /**
     * Accuracy of the altitude value in meters.
     * null if vertical accuracy data is not available on the device.
     */
    vertical_accuracy: number | null;
    /**
     * Accuracy of the course value in degrees.
     * null if course accuracy data is not available on the device.
     */
    course_accuracy: number | null;
    /**
     * Accuracy of the speed value in m/s.
     * null if speed accuracy data is not available on the device.
     */
    speed_accuracy: number | null;
}

export interface EmojiStatusParams {
    /**
     * Optional. The duration for which the status will remain set, in seconds.
     */
    duration?: number;
}

export interface DownloadFileParams {
    /**
     * The HTTPS URL of the file to be downloaded.
     */
    url: string;
    /**
     * The suggested name for the downloaded file.
     */
    file_name: string;
}

export interface SafeAreaInset {
    /**
     * The top inset in pixels, representing the space to avoid at the top of the screen.
     * Also available as the CSS variable var(--tg-safe-area-inset-top).
     */
    top: number;
    /**
     * The bottom inset in pixels, representing the space to avoid at the bottom of the screen.
     * Also available as the CSS variable var(--tg-safe-area-inset-bottom).
     */
    bottom: number;
    /**
     * The left inset in pixels, representing the space to avoid on the left side of the screen.
     * Also available as the CSS variable var(--tg-safe-area-inset-left).
     */
    left: number;
    /**
     * The right inset in pixels, representing the space to avoid on the right side of the screen.
     * Also available as the CSS variable var(--tg-safe-area-inset-right).
     */
    right: number;
}

export interface ContentSafeAreaInset {
    /**
     * The top inset in pixels, representing the space to avoid at the top of the content area.
     * Also available as the CSS variable var(--tg-content-safe-area-inset-top).
     */
    top: number;
    /**
     * The bottom inset in pixels, representing the space to avoid at the bottom of the content area.
     * Also available as the CSS variable var(--tg-content-safe-area-inset-bottom).
     */
    bottom: number;
    /**
     * The left inset in pixels, representing the space to avoid on the left side of the content area.
     * Also available as the CSS variable var(--tg-content-safe-area-inset-left).
     */
    left: number;
    /**
     * The right inset in pixels, representing the space to avoid on the right side of the content area.
     * Also available as the CSS variable var(--tg-content-safe-area-inset-right).
     */
    right: number;
}

export interface Accelerometer {
    /**
     * Indicates whether accelerometer tracking is currently active.
     */
    isStarted: boolean;
    /**
     * The current acceleration in the X-axis, measured in m/s².
     */
    x: number;
    /**
     * The current acceleration in the Y-axis, measured in m/s².
     */
    y: number;
    /**
     * The current acceleration in the Z-axis, measured in m/s².
     */
    z: number;
    /**
     * **Bot API 8.0+**
     *
     * Starts tracking accelerometer data using params of type AccelerometerStartParams.
     * If an optional callback parameter is provided,
     * the callback function will be called with a boolean indicating whether tracking was successfully started.
     */
    start: (params: AccelerometerStartParams, callback?: (success: boolean) => void) => Accelerometer;
    /**
     * **Bot API 8.0+**
     *
     * Stops tracking accelerometer data.
     * If an optional callback parameter is provided,
     * the callback function will be called with a boolean indicating
     * whether tracking was successfully stopped.
     */
    stop: (callback?: (success: boolean) => void) => Accelerometer;
}

export interface AccelerometerStartParams {
    /**
     * Optional.
     * The refresh rate in milliseconds, with acceptable values ranging from 20 to 1000.
     * Set to 1000 by default. Note that refresh_rate may not be supported on all platforms,
     * so the actual tracking frequency may differ from the specified value.
     */
    refresh_rate?: number;
}

export interface DeviceOrientation {
    /**
     * Indicates whether device orientation tracking is currently active.
     */
    isStarted: boolean;
    /**
     * A boolean that indicates whether or not the device is providing orientation data in absolute values.
     */
    absolute: boolean;
    /**
     * The rotation around the Z-axis, measured in radians.
     */
    alpha: number;
    /**
     * The rotation around the X-axis, measured in radians.
     */
    beta: number;
    /**
     * The rotation around the Y-axis, measured in radians.
     */
    gamma: number;
    /**
     * **Bot API 8.0+**
     *
     * Starts tracking device orientation data using params of type DeviceOrientationStartParams.
     * If an optional callback parameter is provided,
     * the callback function will be called with a boolean indicating whether tracking was successfully started.
     */
    start: (params: DeviceOrientationStartParams, callback?: (success: boolean) => void) => DeviceOrientation;
    /**
     * **Bot API 8.0+**
     *
     * Stops tracking device orientation data.
     * If an optional callback parameter is provided,
     * the callback function will be called with a boolean indicating whether tracking was successfully stopped.
     */
    stop: (callback?: (success: boolean) => void) => DeviceOrientation;
}

export interface DeviceOrientationStartParams {
    /**
     * Optional.
     * The refresh rate in milliseconds, with acceptable values ranging from 20 to 1000.
     * Set to 1000 by default. Note that refresh_rate may not be supported on all platforms,
     * so the actual tracking frequency may differ from the specified value.
     */
    refresh_rate?: number;
    /**
     * Optional.
     * Pass true to receive absolute orientation data,
     * allowing you to determine the device's attitude relative to magnetic north.
     * Use this option if implementing features like a compass in your app.
     * If relative data is sufficient, pass false. Set to false by default.
     *
     * Note: Keep in mind that some devices may not support absolute orientation data.
     * In such cases, you will receive relative data even if need_absolute=true is passed.
     * Check the DeviceOrientation.absolute parameter to determine whether the data provided is absolute or relative.
     */
    need_absolute?: boolean;
}

export interface Gyroscope {
    /**
     * Indicates whether gyroscope tracking is currently active.
     */
    isStarted: boolean;
    /**
     * The current rotation rate around the X-axis, measured in rad/s.
     */
    x: number;
    /**
     * The current rotation rate around the Y-axis, measured in rad/s.
     */
    y: number;
    /**
     * The current rotation rate around the Z-axis, measured in rad/s.
     */
    z: number;
    /**
     * **Bot API 8.0+**
     *
     * Starts tracking gyroscope data using params of type GyroscopeStartParams.
     * If an optional callback parameter is provided,
     * the callback function will be called with a boolean indicating whether tracking was successfully started.
     */
    start: (params: GyroscopeStartParams, callback?: (success: boolean) => void) => Gyroscope;
    /**
     * **Bot API 8.0+**
     *
     * Stops tracking gyroscope data.
     * If an optional callback parameter is provided,
     * the callback function will be called with a boolean indicating whether tracking was successfully stopped.
     */
    stop: (callback?: (success: boolean) => void) => Gyroscope;
}

export interface GyroscopeStartParams {
    /**
     * Optional.
     * The refresh rate in milliseconds, with acceptable values ranging from 20 to 1000.
     * Set to 1000 by default. Note that refresh_rate may not be supported on all platforms,
     * so the actual tracking frequency may differ from the specified value.
     */
    refresh_rate?: number;
}

export interface LocationManager {
    /**
     * Shows whether the LocationManager object has been initialized.
     */
    isInited: boolean;
    /**
     * Shows whether location services are available on the current device.
     */
    isLocationAvailable: boolean;
    /**
     * Shows whether permission to use location has been requested.
     */
    isAccessRequested: boolean;
    /**
     * Shows whether permission to use location has been granted.
     */
    isAccessGranted: boolean;
    /**
     * Bot API 8.0+
     *
     * A method that initializes the LocationManager object.
     * It should be called before the object's first use.
     * If an optional callback parameter is provided,
     * the callback function will be called when the object is initialized.
     */
    init: (callback?: () => void) => LocationManager;
    /**
     * **Bot API 8.0+**
     *
     * A method that requests location data.
     * The callback function will be called with null as the first argument
     * if access to location was not granted,
     * or an object of type LocationData as the first argument if access was successful.
     */
    getLocation: (callback: (locationData: LocationData | null) => void) => LocationManager;
    /**
     * **Bot API 8.0+**
     *
     * A method that opens the location access settings for bots.
     * Useful when you need to request location access from users who haven't granted it yet.
     *
     * Note that this method can be called only in response to user interaction with the Mini App interface
     * (e.g., a click inside the Mini App or on the main button).
     */
    openSettings: () => LocationManager;
}

export interface DeviceStorage {
    /**
     * Bot API 9.0+
     *
     * A method that stores a value in the device's local storage using the specified key.
     * If an optional callback parameter was passed, the callback function will be called.
     * In case of an error, the first argument will contain the error.
     * In case of success, the first argument will be null and the second argument will be a boolean
     * indicating whether the value was stored.
     */
    setItem: (key: string, value: string, callback?: (error: string | null, success: boolean) => void) => DeviceStorage;
    /**
     * Bot API 9.0+
     *
     * A method that receives a value from the device's local storage using the specified key.
     * In case of an error, the callback function will be called and the first argument will contain the error.
     * In case of success, the first argument will be null and the value will be passed as the second argument.
     */
    getItem: (key: string, callback?: (error: string | null, item: string) => void) => DeviceStorage;
    /**
     * Bot API 9.0+
     *
     * A method that removes a value from the device's local storage using the specified key.
     * If an optional callback parameter was passed, the callback function will be called.
     * In case of an error, the first argument will contain the error.
     * In case of success, the first argument will be null
     * and the second argument will be a boolean indicating whether the value was removed.
     */
    removeItem: (key: string, callback?: (error: string | null, success: boolean) => void) => DeviceStorage;
    /**
     * Bot API 9.0+
     *
     * A method that clears all keys previously stored by the bot in the device's local storage.
     * If an optional callback parameter was passed, the callback function will be called.
     * In case of an error, the first argument will contain the error.
     * In case of success, the first argument will be null
     * and the second argument will be a boolean indicating whether all values were removed.
     */
    clear: (callback?: (error: string | null, success: boolean) => void) => DeviceStorage;
}

export interface SecureStorage {
    /**
     * Bot API 9.0+
     *
     * A method that stores a value in the device's secure storage using the specified key.
     * If an optional callback parameter was passed, the callback function will be called.
     * In case of an error, the first argument will contain the error.
     * In case of success, the first argument will be null
     * and the second argument will be a boolean indicating whether the value was stored.
     */
    setItem: (key: string, value: string, callback?: (error: string | null, success: boolean) => void) => SecureStorage;
    /**
     * Bot API 9.0+
     *
     * A method that receives a value from the device's secure storage using the specified key.
     * In case of an error, the callback function will be called and the first argument will contain the error.
     * In case of success, the first argument will be null and the value will be passed as the second argument.
     * If the key was not found, the second argument will be null,
     * and the third argument will be a boolean indicating whether the key can be restored from the current device.
     */
    getItem: (
        key: string,
        callback?: (error: string | null, item: string | null, restorable: boolean) => void,
    ) => SecureStorage;
    /**
     * Bot API 9.0+
     *
     * Attempts to restore a key that previously existed on the current device.
     * When called, the user will be asked for permission to restore the value.
     * If the user declines or an error occurs, the first argument in the callback will contain the error.
     * If restored successfully, the first argument will be null and the second argument will contain the restored value.
     */
    restoreItem: (key: string, callback?: (error: string | null, item: string) => void) => SecureStorage;
    /**
     * Bot API 9.0+
     *
     * A method that removes a value from the device's secure storage using the specified key.
     * If an optional callback parameter was passed, the callback function will be called.
     * In case of an error, the first argument will contain the error.
     * In case of success, the first argument will be null
     * and the second argument will be a boolean indicating whether the value was removed.
     */
    removeItem: (key: string, callback?: (error: string | null, success: boolean) => void) => SecureStorage;
    /**
     * Bot API 9.0+
     *
     * A method that clears all keys previously stored by the bot in the device's secure storage.
     * If an optional callback parameter was passed, the callback function will be called.
     * In case of an error, the first argument will contain the error. In case of success,
     * the first argument will be null
     * and the second argument will be a boolean indicating whether all values were removed.
     */
    clear: (callback?: (error: string | null, success: boolean) => void) => SecureStorage;
}
